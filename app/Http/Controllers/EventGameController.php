<?php

namespace App\Http\Controllers;

use App\Enums\Result;
use App\Http\Requests\UpdateGameRequest;
use App\Models\Event;
use App\Models\Game;
use App\Services\RatingService;
use App\Services\RoundService;
use Illuminate\Http\RedirectResponse;
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

        if ($roundService->hasUnregisteredResults()) {
            Inertia::flash('toast', ['type' => 'error', 'message' => 'There are unregistered results. Please register all results before generating a new round.']);

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
    public function update(UpdateGameRequest $request, Event $event, Game $game): RedirectResponse
    {
        $data = $request->validated();

        $selectedPlayers = $data['players'];
        $selectedPoints = $data['points'];
        $otherPoints = $game->event->game_points - $selectedPoints;

        $selectedResult = match ($selectedPoints <=> $otherPoints) {
            1 => Result::Win,
            0 => Result::Tie,
            -1 => Result::Loss,
        };

        $otherResult = match ($selectedResult) {
            Result::Win => Result::Loss,
            Result::Loss => Result::Win,
            Result::Tie => Result::Tie,
        };

        $otherPlayers = $game->players()->whereNotIn('player_id', $selectedPlayers)->get();

        foreach ($selectedPlayers as $playerId) {
            $game->players()->updateExistingPivot($playerId, ['points' => $selectedPoints, 'result' => $selectedResult]);
        }

        foreach ($otherPlayers as $player) {
            $game->players()->updateExistingPivot($player->id, ['points' => $otherPoints, 'result' => $otherResult]);
        }

        // TODO: try to optimize this so we do not fetch players again
        $players = $event->players()->whereRelation('games', 'games.id', $game->id)->get();
        RatingService::event($event)->calculateEventRatings($players);

        return back();
    }
}
