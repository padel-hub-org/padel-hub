<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

/**
 * @property int $id
 * @property int $event_id
 * @property int $player_id
 * @property int $event_rating
 * @property string|null $disabled_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Event|null $event
 * @property-read \App\Models\Player|null $player
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventPlayer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventPlayer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventPlayer query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventPlayer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventPlayer whereDisabledAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventPlayer whereEventId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventPlayer whereEventRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventPlayer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventPlayer wherePlayerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EventPlayer whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class EventPlayer extends Pivot
{
    /**
     * @return BelongsTo<Player, $this>
     */
    public function player(): BelongsTo
    {
        return $this->belongsTo(Player::class);
    }

    /**
     * @return BelongsTo<Event, $this>
     */
    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }
}
