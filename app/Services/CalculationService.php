<?php

namespace App\Services;

use App\Enums\Result;

class CalculationService
{
    const int RATING_DIFFERENCE_SCALE = 300;

    const int LEARNING_RATE = 10;

    const float INDIVIDUAL_CONTRIBUTION_WEIGHT = 0.5;

    const float OUTCOME_WEIGHT = 0.5;

    const float MARGIN_WEIGHT = 1 - self::OUTCOME_WEIGHT;

    private float $teamScoreResult;

    private float $avgOpponentRating;

    private float $avgTeamRating;

    private float $playerRating;

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

    private function getTeamPr(): float
    {
        return $this->avgOpponentRating + self::RATING_DIFFERENCE_SCALE * $this->teamScoreResult;
    }

    public function withRatings(int $playerRating, int $partnerRating): self
    {
        $this->avgTeamRating = ($playerRating + $partnerRating) / 2;
        $this->playerRating = $playerRating;

        return $this;
    }

    public function getPersonalPr(): float
    {
        $teamPr = $this->getTeamPr();
        $individualOffset = $this->playerRating - $this->avgTeamRating;

        return $teamPr + self::INDIVIDUAL_CONTRIBUTION_WEIGHT * $individualOffset;
    }

    public function getPlayerRating(): int
    {
        $scaledRatingDifference = ($this->avgOpponentRating - $this->avgTeamRating) / self::RATING_DIFFERENCE_SCALE;

        $expectedWinProbability = 1 / (1 + pow(10, $scaledRatingDifference));

        $teamScoreResult = ($this->teamScoreResult + 1) / 2;

        $ratingChange = self::LEARNING_RATE * ($teamScoreResult - $expectedWinProbability);

        if ($ratingChange > 0) {
            return (int) floor($this->playerRating + $ratingChange);
        } else {
            return (int) ceil($this->playerRating + $ratingChange);
        }
    }
}
