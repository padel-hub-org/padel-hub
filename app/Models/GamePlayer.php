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
 * @property-read Game|null $game
 * @property-read mixed $opponent_points
 * @property-read mixed $partner_rating
 * @property-read Player|null $player
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
 * @property-read mixed $event_rating_change
 * @property-read mixed $event_rating_change
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

    /**
     * @return Attribute<int, null>
     */
    public function eventRatingChange(): Attribute
    {
        return Attribute::get(function () {
            $game = $this->game;

            $round = $game->round;

            $nextGamePlayer = GamePlayer::query()
                ->where('player_id', $this->player_id)
                ->whereHas('game', fn ($query) => $query->where('event_id', $game->event_id)->where('round', '>', $round))
                ->orderBy(Game::query()->select('round')->whereColumn('games.id', 'game_player.game_id'))
                ->first();

            if (! $nextGamePlayer) {
                return $game->event->players()->where('player_id', $this->player_id)->sole()->pivot->event_rating - $this->previous_event_rating;
            }

            return $nextGamePlayer->previous_event_rating - $this->previous_event_rating;
        });
    }
}
