<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Player;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EventPlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Event $event): Response
    {
        return Inertia::render('events/players/index', [
            'title' => 'Players',
            'event' => $event,
            'eventPlayers' => $event->players()->orderBy('name')->get(),
            'players' => Inertia::scroll(
                fn () => Player::query()->whereDoesntHave('events', function (Builder $builder) use ($event) {
                    $builder->where('events.id', $event->id);
                })->orderBy('name')->paginate()
            ),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Event $event, Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'player_id' => ['required', 'integer', 'exists:players,id'],
        ]);

        $playerRating = Player::query()->find($validated['player_id'])->rating;

        $event->players()->attach($validated['player_id'], ['event_rating' => $playerRating]);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event, Player $player): RedirectResponse
    {
        $event->players()->detach($player);

        return back();
    }
}
