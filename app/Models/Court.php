<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string|null $name
 * @property int $event_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Court newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Court newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Court query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Court whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Court whereEventId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Court whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Court whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Court whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class Court extends Model
{
    protected $fillable = [
        'name',
        'event_id',
    ];
}
