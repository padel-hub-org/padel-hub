<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Game;
use App\Services\RoundService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
            'backUrl' => route('events.index'),
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
        $roundService = RoundService::event($event);

        $playersCount = $roundService->getAvailablePlayersCount();

        if ($playersCount < 4) {
            Inertia::flash('toast', ['type' => 'error', 'message' => 'Not enough players to generate round.']);

            return back();
        }

        DB::beginTransaction();

        try {
            $roundService->generateNewRound();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        DB::commit();

        return back();
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
