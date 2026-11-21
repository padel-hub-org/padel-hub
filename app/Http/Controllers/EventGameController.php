<?php

namespace App\Http\Controllers;

use App\Enums\Result;
use App\Http\Requests\UpdateGameRequest;
use App\Models\Event;
use App\Models\Game;
use App\Services\RatingService;
use App\Services\RoundService;
use Illuminate\Database\Eloquent\Collection;
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
    public function index(Request $request, Event $event): Response
    {
        $data = $request->validate([
            'round' => ['nullable', 'integer', 'min:1'],
            'showRatings' => ['nullable', 'boolean'],
        ]);

        $round = (int) ($data['round'] ?? -1);
        $showRatings = (bool) ($data['showRatings'] ?? false);

        $maxRound = (int) ($event->games()->max('round') ?? 1);

        if ($round === -1) {
            $isEventEnded = $event->ended_at !== null;
            $round = $isEventEnded ? 1 : $maxRound;
        }

        /** @var Collection<int, Game> $games */
        $games = $event->games()
            ->where('round', $round)
            ->with('players')
            ->orderBy('court')
            ->get();

        $ratingDiffs = collect();

        if ($showRatings) {
            $games->load('gamePlayers');
            foreach ($games as $game) {
                foreach ($game->gamePlayers as $gamePlayer) {
                    $ratingDiffs->push([
                        'player_id' => $gamePlayer->player_id,
                        'event_rating_change' => $gamePlayer->event_rating_change,
                    ]);
                }
            }
        }

        return Inertia::render('events/games/index', [
            'title' => 'Games',
            'backUrl' => route('events.index'),
            'games' => $games,
            'showRatings' => $showRatings,
            'ratingDiffs' => $ratingDiffs,
            'playersSittingOut' => $event->players()
                ->whereDoesntHave('games', function ($query) use ($event, $round) {
                    $query->where('event_id', $event->id)->where('round', $round);
                })
                ->orderBy('name')
                ->get(),
            'event' => $event,
            'round' => $round,
            'maxRound' => $maxRound,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Event $event): RedirectResponse
    {
        if ($event->ended_at !== null) {
            Inertia::flash('toast', ['type' => 'error', 'message' => 'Event has ended.']);

            return back();
        }
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
            $round = $roundService->generateNewRound();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        DB::commit();

        return redirect()->route('events.games.index', ['event' => $event->id, 'round' => $round]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGameRequest $request, Event $event, Game $game): RedirectResponse
    {
        if ($event->ended_at !== null) {
            Inertia::flash('toast', ['type' => 'error', 'message' => 'Event has ended.']);

            return back();
        }

        $data = $request->validated();

        $playersA = $data['playersA'];
        $playersB = $data['playersB'];
        $pointsA = $data['pointsA'];
        $pointsB = $data['pointsB'];

        $resultA = match ($pointsA <=> $pointsB) {
            1 => Result::Win,
            0 => Result::Tie,
            -1 => Result::Loss,
        };

        $resultB = match ($resultA) {
            Result::Win => Result::Loss,
            Result::Loss => Result::Win,
            Result::Tie => Result::Tie,
        };

        foreach ($playersA as $playerId) {
            $game->players()->updateExistingPivot($playerId, ['points' => $pointsA, 'result' => $resultA]);
        }

        foreach ($playersB as $playerId) {
            $game->players()->updateExistingPivot($playerId, ['points' => $pointsB, 'result' => $resultB]);
        }

        RatingService::event($event)->calculateEventRatings();

        return back();
    }
}
