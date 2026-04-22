<?php

namespace App\Models;

use Database\Factories\PlayerFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property int|null $user_id
 * @property int $rating
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property Carbon|null $deleted_at
 * @property-read GamePlayer|EventPlayer|null $pivot
 * @property-read Collection<int, Event> $events
 * @property-read int|null $events_count
 * @property-read Collection<int, GamePlayer> $gamePlayers
 * @property-read int|null $game_players_count
 * @property-read Collection<int, Game> $games
 * @property-read int|null $games_count
 * @property-read User|null $user
 *
 * @method static \Database\Factories\PlayerFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player whereRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player withTrashed(bool $withTrashed = true)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Player withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Player extends Model
{
    /** @use HasFactory<PlayerFactory> */
    use HasFactory;

    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
    ];

    /**
     * @return BelongsTo<User, $this>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsToMany<Event, $this, EventPlayer>
     */
    public function events(): BelongsToMany
    {
        return $this->belongsToMany(Event::class)
            ->using(EventPlayer::class)
            ->withTimestamps();
    }

    /**
     * @return HasMany<GamePlayer, $this>
     */
    public function gamePlayers()
    {
        return $this->hasMany(GamePlayer::class);
    }

    /**
     * @return BelongsToMany<Game, $this, GamePlayer>
     */
    public function games(): BelongsToMany
    {
        return $this->belongsToMany(Game::class)
            ->using(GamePlayer::class)
            ->withPivot('previous_player_rating', 'previous_event_rating', 'points', 'partner_id', 'result');
    }
}
