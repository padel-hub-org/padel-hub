<?php

namespace Database\Seeders;

use App\Enums\Result;
use App\Models\Event;
use App\Models\Game;
use App\Models\Player;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = Event::factory()->count(10)->create();
        $players = Player::factory()->count(25)->create();

        foreach ($events as $event) {
            $playerCount = fake()->numberBetween($event->court_count * 4, 18);
            $eventPlayers = $players->shuffle()->take($playerCount);

            foreach ($eventPlayers as $player) {
                $isDisabled = fake()->boolean(10);
                $event->players()->attach($player, [
                    'event_rating' => fake()->numberBetween(0, 3000),
                    'disabled_at' => $isDisabled ? fake()->dateTimeBetween($event->starts_at, $event->starts_at->addMinutes(fake()->numberBetween(0, 90))) : null,
                ]);
            }

            $rounds = fake()->numberBetween(1, 10);

            for ($round = 0; $round < $rounds; $round++) {
                $playersRandomOrder = $eventPlayers->shuffle();

                for ($court = 0; $court < $event->court_count; $court++) {
                    $gamePlayers = $playersRandomOrder->skip($court * 4)->take(4);

                    /** @var Game $game */
                    $game = Game::factory()->for($event)->create([
                        'court' => $court,
                        'round' => $round + 1,
                    ]);

                    $teamAPoints = fake()->numberBetween(0, $event->game_points);
                    $teamBPoints = $event->game_points - $teamAPoints;
                    $teamAPlayers = $gamePlayers->take(2);
                    $teamBPlayers = $gamePlayers->skip(2)->take(2);

                    $teamAResult = Result::Tie;
                    $teamBResult = Result::Tie;

                    if ($teamAPoints > $teamBPoints) {
                        $teamAResult = Result::Win;
                        $teamBResult = Result::Loss;
                    }

                    if ($teamBPoints > $teamAPoints) {
                        $teamAResult = Result::Loss;
                        $teamBResult = Result::Win;
                    }

                    foreach ($gamePlayers as $gamePlayer) {
                        $game->players()->attach($gamePlayer, [
                            'previous_player_rating' => fake()->numberBetween(0, 3000),
                            'previous_event_rating' => fake()->numberBetween(0, 3000),
                            'points' => $teamAPlayers->contains($gamePlayer) ? $teamAPoints : $teamBPoints,
                            'partner_id' => $teamAPlayers->contains($gamePlayer)
                                 ? $teamAPlayers->where('id', '!=', $gamePlayer->id)->first()->id
                                 : $teamBPlayers->where('id', '!=', $gamePlayer->id)->first()->id,
                            'result' => $teamAPlayers->contains($gamePlayer) ? $teamAResult : $teamBResult,
                        ]);

                    }
                }
            }

        }
    }
}
