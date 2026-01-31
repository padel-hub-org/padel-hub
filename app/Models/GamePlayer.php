<?php

namespace App\Models;

use App\Enums\Result;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

/**
 * @property int $id
 * @property int $game_id
 * @property int $player_id
 * @property int $partner_id
 * @property int $previous_player_rating
 * @property int $previous_event_rating
 * @property int|null $points
 * @property Result|null $result
 * @property-read mixed $average_opponent_rating
 * @property-read \App\Models\Game|null $game
 * @property-read mixed $opponent_points
 * @property-read mixed $partner_rating
 * @property-read \App\Models\Player|null $player
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer whereGameId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer wherePartnerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer wherePlayerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer wherePoints($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer wherePreviousEventRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer wherePreviousPlayerRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|GamePlayer whereResult($value)
 *
 * @mixin \Eloquent
 */
class GamePlayer extends Pivot
{
    protected function casts(): array
    {
        return [
            'result' => Result::class,
        ];
    }

    /**
     * @return Attribute<int|null, never>
     */
    protected function opponentPoints(): Attribute
    {
        return Attribute::make(get: function (): ?int {
            return $this->game
                ->gamePlayers()
                ->where('player_id', '!=', $this->player_id)
                ->where('player_id', '!=', $this->partner_id)
                ->first()
                ?->points;
        });
    }

    /**
     * @return Attribute<int, never>
     */
    protected function averageOpponentRating(): Attribute
    {
        return Attribute::make(get: function (): int {
            $opponentPlayerIds = $this->game
                ->gamePlayers()
                ->where('player_id', '!=', $this->player_id)
                ->where('player_id', '!=', $this->partner_id)
                ->pluck('player_id');

            return (int) round(
                EventPlayer::query()
                    ->where('event_id', $this->game->event_id)
                    ->whereIn('player_id', $opponentPlayerIds)
                    ->avg('start_rating')
            );
        });
    }

    /**
     * @return Attribute<int|null, never>
     */
    protected function partnerRating(): Attribute
    {
        return Attribute::make(get: function (): ?int {
            return EventPlayer::query()
                ->where('event_id', $this->game->event_id)
                ->where('player_id', $this->partner_id)
                ->value('start_rating');
        });
    }

    /**
     * @return BelongsTo<Player, $this>
     */
    public function player(): BelongsTo
    {
        return $this->belongsTo(Player::class);
    }

    /**
     * @return BelongsTo<Game, $this>
     */
    public function game(): BelongsTo
    {
        return $this->belongsTo(Game::class);
    }
}
