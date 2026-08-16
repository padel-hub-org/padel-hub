<?php

namespace App\Services;

use App\Enums\RatingType;
use App\Enums\Result;

class CalculationService
{
    const int RATING_DIFFERENCE_SCALE = 75;

    public const int PLAYER_RATING_LEARNING_RATE = 10;

    public const int EVENT_RATING_LEARNING_RATE = 50;

    const float OUTCOME_WEIGHT = 0.5;

    const float MARGIN_WEIGHT = 1 - self::OUTCOME_WEIGHT;

    private float $teamScoreResult;

    private float $avgOpponentRating;

    private float $avgTeamRating;

    public function withResult(Result $result): self
    {
        $this->teamScoreResult = $result->value() * self::OUTCOME_WEIGHT;

        return $this;
    }

    public function withPoints(int $playerPoints, int $opponentPoints): self
    {
        $this->teamScoreResult += (
            ($playerPoints - $opponentPoints) / ($playerPoints + $opponentPoints)
        ) * self::MARGIN_WEIGHT;

        return $this;
    }

    public function withAvgOpponentRating(int $opponentRating): self
    {
        $this->avgOpponentRating = $opponentRating;

        return $this;
    }

    public function withRatings(int $playerRating, int $partnerRating): self
    {
        $this->avgTeamRating = ($playerRating + $partnerRating) / 2;

        return $this;
    }

    public function getRatingChange(RatingType $type): int
    {
        $scaledRatingDifference = ($this->avgOpponentRating - $this->avgTeamRating) / self::RATING_DIFFERENCE_SCALE;

        $expectedWinProbability = 1 / (1 + pow(10, $scaledRatingDifference));

        $teamScoreResult = ($this->teamScoreResult + 1) / 2;

        $ratingChange = $type->getLearningRate() * ($teamScoreResult - $expectedWinProbability);

        if ($ratingChange > 0) {
            return (int) floor($ratingChange);
        } else {
            return (int) ceil($ratingChange);
        }
    }
}
