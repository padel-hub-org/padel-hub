<?php

namespace App\Services;

use App\Enums\RatingType;
use App\Models\Event;
use App\Models\EventPlayer;
use App\Models\Player;
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

    public function calculateEventRatings(): void
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

    }

    public function calculatePlayerRatings(): void
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
    }

    /**
     * @param  array<int, int>  $playerRatings
     * @return array<int, int>
     */
    private function calculateRatings(array $playerRatings, RatingType $ratingType): array
    {
        $games = $this->event->games()->with('gamePlayers')->orderBy('round')->get();

        foreach ($games as $game) {
            $gamePlayers = $game->gamePlayers;

            $gamePlayerRatings = $playerRatings;

            foreach ($gamePlayers as $gamePlayer) {
                if ($ratingType === RatingType::event) {
                    $game->players()->updateExistingPivot($gamePlayer->player_id, [
                        'previous_event_rating' => $gamePlayerRatings[$gamePlayer->player_id],
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
                $avgOpponentRating = (int) round(
                    $opponentPlayerIds->map(fn ($id) => $gamePlayerRatings[$id] ?? 0)
                        ->avg()
                );

                $calculator = new CalculationService;

                $calculator
                    ->withResult($gamePlayer->result)
                    ->withPoints($gamePlayer->points, $opponentPoints)
                    ->withAvgOpponentRating($avgOpponentRating)
                    ->withRatings($gamePlayerRatings[$gamePlayer->player_id] ?? 0, $gamePlayerRatings[$gamePlayer->partner_id] ?? 0);

                $ratingChange = $calculator->getRatingChange($ratingType);

                $playerRatings[$gamePlayer->player_id] += $ratingChange;
            }
        }

        return $playerRatings;
    }
}
