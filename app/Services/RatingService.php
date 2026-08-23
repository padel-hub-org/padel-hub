<?php

namespace App\Services;

use App\Enums\RatingType;
use App\Models\Event;
use App\Models\EventPlayer;
use App\Models\Game;
use App\Models\Player;
use Illuminate\Database\Eloquent\Collection;
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

    public function ensureInitialRatings(): self
    {
        if (! $this->event->players()->wherePivot('start_rating', 0)->exists()) {
            return $this;
        }

        $currentRating = 1500 - (round($this->event->players()->count() / 2)) * 5;

        /** @var Collection<int, EventPlayer> $players */
        $players = $this->event->players()->orderBy('rating')->get();

        foreach ($players as $player) {
            $this->event->players()->updateExistingPivot($player->id, [
                'start_rating' => $currentRating,
                'event_rating' => $currentRating,
            ]);

            $currentRating += 5;
        }

        $this->calculateEventRatings();

        return $this;
    }

    public function calculateEventRatings(): self
    {
        $eventPlayerRatings = EventPlayer::query()
            ->where('event_id', $this->event->id)
            ->pluck('start_rating', 'player_id')
            ->toArray();

        $eventPlayerRatings = $this->calculateRatings($eventPlayerRatings, RatingType::event);

        foreach ($eventPlayerRatings as $playerId => $rating) {
            $this->event->players()->updateExistingPivot($playerId, [
                'event_rating' => $rating,
            ]);
        }

        return $this;
    }

    public function calculatePlayerRatings(): self
    {
        $playerRatings = $this->event->players()
            ->pluck('rating', 'players.id')
            ->toArray();

        $playerRatings = $this->calculateRatings($playerRatings, RatingType::player);

        DB::transaction(
            function () use ($playerRatings) {
                foreach ($playerRatings as $playerId => $rating) {
                    Player::query()->where('id', $playerId)->update(['rating' => $rating]);
                }
            }
        );

        return $this;
    }

    /**
     * @param  array<int, int>  $ratings
     * @return array<int, int>
     */
    private function calculateRatings(array $ratings, RatingType $ratingType): array
    {
        $games = $this->event->games()->with('gamePlayers')->orderBy('round')->get();

        /** @var Game $game */
        foreach ($games as $game) {
            $gamePlayers = $game->gamePlayers;

            $gameRatings = $ratings;

            foreach ($gamePlayers as $gamePlayer) {
                if ($ratingType === RatingType::event) {
                    $game->players()->updateExistingPivot($gamePlayer->player_id, [
                        'previous_event_rating' => $gameRatings[$gamePlayer->player_id] ?? 0,
                    ]);
                }

                if (! $gamePlayer->result) {
                    continue;
                }

                $opponents = $game->gamePlayers
                    ->where('player_id', '!=', $gamePlayer->player_id)
                    ->where('player_id', '!=', $gamePlayer->partner_id);

                $opponentPoints = $opponents->first()?->points;

                $opponentPlayerIds = $opponents->pluck('player_id');
                $avgOpponentRating = $opponentPlayerIds->map(fn ($id) => $gameRatings[$id] ?? 0)->avg();

                $calculator = new CalculationService;

                $calculator
                    ->withResult($gamePlayer->result)
                    ->withPoints($gamePlayer->points, $opponentPoints)
                    ->withAvgOpponentRating($avgOpponentRating)
                    ->withRatings($gameRatings[$gamePlayer->player_id] ?? 0, $gameRatings[$gamePlayer->partner_id] ?? 0);

                $ratingChange = $calculator->getRatingChange($ratingType);

                $ratings[$gamePlayer->player_id] += $ratingChange;
            }
        }

        return $ratings;
    }
}
