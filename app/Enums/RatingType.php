<?php

namespace App\Enums;

use App\Services\CalculationService;

enum RatingType
{
    case event;
    case player;

    public function getLearningRate(): int
    {
        return match ($this) {
            RatingType::event => CalculationService::EVENT_RATING_LEARNING_RATE,
            RatingType::player => CalculationService::PLAYER_RATING_LEARNING_RATE
        };
    }
}
