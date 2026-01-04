<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Models\Event;
use App\Models\Player;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('events/index', [
            'events' => Inertia::scroll(fn () => Event::query()
                ->latest('starts_at')
                ->withCount('players')
                ->paginate()
            ),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('events/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRequest $request): RedirectResponse
    {

        $startsAt = Carbon::parse("{$request->validated('starts_at_date')} {$request->validated('starts_at_time')}", $request->validated('timezone'))->setTimezone('UTC');

        $event = Event::query()->create([
            'court_count' => $request->validated('court_count'),
            'game_points' => $request->validated('game_points'),
            'starts_at' => $startsAt,
        ]);

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Event created successfully.']);

        return redirect()->route('events.show', $event);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event): Response
    {
        return Inertia::render('events/show', [
            'event' => $event->load('players'),
        ]);
    }

    /**
     * Set disabled_at on an EventPlayer resource.
     */
    public function setDisabled(Event $event, Player $player, Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'should_disable' => ['required', 'boolean'],
        ]);

        $event->players()->updateExistingPivot($player->id, [
            'disabled_at' => $validated['should_disable'] ? now() : null,
        ]);

        return back();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event): RedirectResponse
    {
        return redirect()->route('events.show', $event);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event): RedirectResponse
    {
        $event->update($request->validated());
        Inertia::flash('toast', ['type' => 'success', 'message' => 'Event updated successfully.']);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event): RedirectResponse
    {
        $event->delete();

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Event deleted successfully.']);

        return redirect()->route('events.index');
    }
}
