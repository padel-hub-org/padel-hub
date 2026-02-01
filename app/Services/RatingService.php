<?php

namespace App\Services;

use App\Models\Event;
use App\Models\Player;
use Illuminate\Database\Eloquent\Collection;

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
        foreach ($players as $player) {
            $gamePlayers = $player->gamePlayers()->whereRelation('game', 'event_id', $this->event->id)->get();

            $sumOfPersonalPr = 0;

            // TODO: try to reduce number of queries done in this forloop particularly
            // regarding the attributes in gameplayer.
            foreach ($gamePlayers as $gamePlayer) {
                $calculator = new CalculationService;

                $calculator
                    ->withResult($gamePlayer->result)
                    ->withPoints($gamePlayer->points, $gamePlayer->opponent_points)
                    ->withAvgOpponentRating($gamePlayer->average_opponent_rating)
                    ->withRatings($player->pivot->start_rating, $gamePlayer->partner_rating);

                $sumOfPersonalPr += $calculator->getPersonalPr();
            }

            $playerPr = (int) round($sumOfPersonalPr / $gamePlayers->count());

            $this->event->players()->updateExistingPivot($player->id, [
                'event_rating' => $playerPr,
            ]);
        }
    }
}
