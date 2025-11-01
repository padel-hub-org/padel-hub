<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startsAt = Carbon::parse(fake()->dateTimeBetween('-1 month', '+1 week'));

        return [
            'starts_at' => $startsAt,
            'court_count' => fake()->numberBetween(1, 4),
            'game_points' => fake()->randomElement([16, 21]),
            'ended_at' => fake()->randomElement([fake()->dateTimeBetween($startsAt, $startsAt->addHours(2)), null]),
        ];
    }
}
