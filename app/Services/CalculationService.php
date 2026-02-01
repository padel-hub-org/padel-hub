<?php

namespace App\Services;

use App\Enums\Result;

class CalculationService
{
    const int RATING_DIFFERENCE = 300;

    const float INDIVIDUAL_CONTRIBUTION_WEIGHT = 0.5;

    const float OUTCOME_WEIGHT = 0.5;

    const float MARGIN_WEIGHT = 1 - self::OUTCOME_WEIGHT;

    private float $teamScoreResult;

    private float $teamPr;

    private float $individualOffset;

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
        $this->teamPr = $opponentRating + self::RATING_DIFFERENCE * $this->teamScoreResult;

        return $this;
    }

    public function withRatings(int $playerRating, int $partnerRating): self
    {
        $teamAvg = ($playerRating + $partnerRating) / 2;
        $this->individualOffset = $playerRating - $teamAvg;

        return $this;
    }

    public function getPersonalPr(): float
    {
        return $this->teamPr + self::INDIVIDUAL_CONTRIBUTION_WEIGHT * $this->individualOffset;
    }
}
