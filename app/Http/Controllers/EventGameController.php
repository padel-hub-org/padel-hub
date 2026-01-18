<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Game;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EventGameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Event $event): Response
    {
        return Inertia::render('events/games/index', [
            'title' => 'Games',
            'gamesByRound' => $event->games()
                ->with('players')
                ->orderByDesc('round')
                ->orderByDesc('court')
                ->get()
                ->groupBy('round'),
            'event' => $event,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): void
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Event $event): RedirectResponse
    {
        $playersCount = $event->players()->wherePivot('disabled_at', null)->count();

        if ($playersCount < 4) {
            Inertia::flash('toast', ['type' => 'error', 'message' => 'Not enough players to generate round.']);

            return back();
        }

        $courtCount = min($event->court_count, floor($playersCount / 4));
        $capacity = $courtCount * 4;
        $pausePlayersCount = $playersCount - $capacity;

        $pausePlayers = $event->players()
            ->wherePivot('disabled_at', null)
            ->withCount([
                'games' => function (Builder $query) use ($event) {
                    $query->where('games.event_id', $event->id);
                },
            ])
            ->orderByDesc('games_count')
            ->limit($pausePlayersCount)
            ->get();

        $players = $event->players()
            ->wherePivot('disabled_at', null)
            ->whereNotIn('players.id', $pausePlayers->pluck('id'))
            ->orderByPivot('event_rating', 'desc')
            ->get();

        for ($i = 0; $i < $courtCount; $i++) {
            $courtPlayers = $players->splice(0, 4);
            $firstPlayer = $courtPlayers->first();

            $partnersWithCount = $firstPlayer->games()
                ->where('games.event_id', $event->id)
                ->whereIn('game_player.partner_id', $courtPlayers->pluck('id'))
                ->join('event_player', function ($join) use ($event) {
                    $join->on('game_player.partner_id', '=', 'event_player.player_id')
                        ->where('event_player.event_id', '=', $event->id);
                })
                ->selectRaw('game_player.partner_id, COUNT(*) as games_count')
                ->groupBy('game_player.partner_id', 'event_player.event_rating')
                ->orderBy('games_count')
                ->orderBy('event_player.event_rating')
                ->getQuery()
                ->get()
                ->map(fn ($item) => (object) ['partner_id' => $item->partner_id, 'count' => $item->games_count]);

            $partnerId = $partnersWithCount->first()?->partner_id;

            dd($firstPlayer->id, $partnerId, $partnersWithCount, $courtPlayers);
        }

        // dd($players->pluck('pivot.event_rating'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Game $game): void
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Game $game): void
    {
        //
    }
}
