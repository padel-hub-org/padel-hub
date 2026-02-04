<?php

namespace App\Services;

use App\Models\Event;
use App\Models\EventPlayer;
use App\Models\Player;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Facades\DB;

class RatingService
{
    /**
     * Create a new class instance.
     */
    public function __construct(private Event $event) {}

    public static function event(Event $event): self
    {
        return new self($event);
    }

    /**
     * @param  Collection<int, Player>  $players
     */
    public function calculateEventRatings(Collection $players): void
    {
        $players->load([
            'gamePlayers' => function (Relation $query) {
                $query->whereHas('game', fn ($q) => $q->where('event_id', $this->event->id))
                    ->with('game.gamePlayers');
            },
        ]);

        $eventPlayerRatings = EventPlayer::query()
            ->where('event_id', $this->event->id)
            ->pluck('start_rating', 'player_id')
            ->toArray();

        foreach ($players as $player) {
            $gamePlayers = $player->gamePlayers;
            $playerStartRating = $eventPlayerRatings[$player->id] ?? 0;

            $sumOfPersonalPr = 0;

            foreach ($gamePlayers as $gamePlayer) {
                if (! $gamePlayer->result) {
                    continue;
                }

                $opponents = $gamePlayer->game->gamePlayers
                    ->where('player_id', '!=', $gamePlayer->player_id)
                    ->where('player_id', '!=', $gamePlayer->partner_id);

                $opponentPoints = $opponents->first()?->points;

                $opponentPlayerIds = $opponents->pluck('player_id');
                $avgOpponentRating = (int) round(
                    $opponentPlayerIds->map(fn ($id) => $eventPlayerRatings[$id] ?? 0)
                        ->avg()
                );

                $partnerRating = $eventPlayerRatings[$gamePlayer->partner_id] ?? null;

                $calculator = new CalculationService;

                $calculator
                    ->withResult($gamePlayer->result)
                    ->withPoints($gamePlayer->points, $opponentPoints)
                    ->withAvgOpponentRating($avgOpponentRating)
                    ->withRatings($playerStartRating, $partnerRating);

                $sumOfPersonalPr += $calculator->getPersonalPr();
            }

            $playerPr = (int) round($sumOfPersonalPr / $gamePlayers->count());

            $this->event->players()->updateExistingPivot($player->id, [
                'event_rating' => $playerPr,
            ]);
        }
    }

    public function calculatePlayerRatings(): void
    {
        $playerRatings = $this->event->players()
            ->pluck('rating', 'players.id')
            ->toArray();

        $games = $this->event->games()->with('gamePlayers')->get();

        foreach ($games as $game) {
            $gamePlayers = $game->gamePlayers;

            $gamePlayerRatings = $playerRatings;

            foreach ($gamePlayers as $gamePlayer) {
                if (! $gamePlayer->result) {
                    continue;
                }

                $opponents = $game->gamePlayers
                    ->where('player_id', '!=', $gamePlayer->player_id)
                    ->where('player_id', '!=', $gamePlayer->partner_id);

                $opponentPoints = $opponents->first()?->points;

                $opponentPlayerIds = $opponents->pluck('player_id');
                $avgOpponentRating = (int) round(
                    $opponentPlayerIds->map(fn ($id) => $gamePlayerRatings[$id] ?? 0)
                        ->avg()
                );

                $calculator = new CalculationService;

                $calculator
                    ->withResult($gamePlayer->result)
                    ->withPoints($gamePlayer->points, $opponentPoints)
                    ->withAvgOpponentRating($avgOpponentRating)
                    ->withRatings($gamePlayerRatings[$gamePlayer->player_id], $gamePlayerRatings[$gamePlayer->partner_id]);

                $playerRatings[$gamePlayer->player_id] = $calculator->getPlayerRating();
            }
        }

        DB::transaction(
            function () use ($playerRatings) {
                foreach ($playerRatings as $playerId => $rating) {
                    Player::query()->where('id', $playerId)->update(['rating' => $rating]);
                }
            }
        );
    }
}
