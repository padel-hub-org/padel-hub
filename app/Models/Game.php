<?php

namespace App\Models;

use Database\Factories\GameFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $event_id
 * @property int $court
 * @property int $round
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Event|null $event
 * @property-read Collection<int, GamePlayer> $gamePlayers
 * @property-read int|null $game_players_count
 * @property-read GamePlayer|null $pivot
 * @property-read Collection<int, Player> $players
 * @property-read int|null $players_count
 *
 * @method static \Database\Factories\GameFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Game newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Game newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Game query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Game whereCourt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Game whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Game whereEventId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Game whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Game whereRound($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Game whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class Game extends Model
{
    /** @use HasFactory<GameFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'court',
        'round',
    ];

    /**
     * @return BelongsTo<Event, $this>
     */
    public function event(): BelongsTo
    {
        return $this->belongsTo(Event::class);
    }

    /**
     * @return HasMany<GamePlayer, $this>
     */
    public function gamePlayers(): HasMany
    {
        return $this->hasMany(GamePlayer::class)
            ->orderBy('previous_event_rating', 'desc');
    }

    /**
     * @return BelongsToMany<Player, $this, GamePlayer>
     */
    public function players(): BelongsToMany
    {
        return $this->belongsToMany(Player::class)
            ->using(GamePlayer::class)
            ->withTrashed()
            ->orderByPivot('previous_event_rating', 'desc')
            ->withPivot('previous_player_rating', 'previous_event_rating', 'points', 'partner_id', 'result');
    }
}
