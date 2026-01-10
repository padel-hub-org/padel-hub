<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Game;
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
    public function store(Request $request): void
    {
        //
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
