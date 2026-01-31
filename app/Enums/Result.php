<?php

namespace App\Enums;

enum Result: string
{
    case Win = 'win';
    case Loss = 'loss';
    case Tie = 'tie';

    public function value(): int
    {
        return match ($this) {
            Result::Win => 1,
            Result::Loss => -1,
            Result::Tie => 0
        };
    }
}
