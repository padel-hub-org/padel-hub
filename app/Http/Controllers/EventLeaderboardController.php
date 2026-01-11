<?php

namespace App\Http\Controllers;

use App\Enums\Result;
use App\Models\Event;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;
use Inertia\Response;

class EventLeaderboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Event $event): Response
    {
        $players = $event->players()
            ->withCount([
                'games' => function (Builder $query) use ($event) {
                    $query->where('games.event_id', $event->id);
                },
                'games as games_won' => function (Builder $query) use ($event) {
                    $query->where('game_player.result', Result::Win)
                        ->where('games.event_id', $event->id);
                },
                'games as games_lost' => function (Builder $query) use ($event) {
                    $query->where('game_player.result', Result::Loss)
                        ->where('games.event_id', $event->id);
                },
                'games as games_tied' => function (Builder $query) use ($event) {
                    $query->where('game_player.result', Result::Tie)
                        ->where('games.event_id', $event->id);
                },
            ])
            ->orderByPivot('event_rating', 'desc')
            ->get();

        $anyTied = $players->contains(function ($player) {
            return ($player->games_tied ?? 0) > 0;
        });

        return Inertia::render('events/leaderboard/index', [
            'title' => 'Leaderboard',
            'event' => $event,
            'players' => $players,
            'anyTied' => $anyTied,
        ]);
    }
}
