<?php

namespace App\Http\Controllers;

use App\Enums\Result;
use App\Http\Requests\UpdateGameRequest;
use App\Models\Event;
use App\Models\Game;
use App\Services\RatingService;
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
    public function index(Request $request, Event $event): Response
    {
        $data = $request->validate([
            'round' => ['nullable', 'integer', 'min:1'],
        ]);

        $round = (int) ($data['round'] ?? -1);

        $maxRound = (int) ($event->games()->max('round') ?? 1);

        if ($round === -1) {
            $isEventEnded = $event->ended_at !== null;
            $round = $isEventEnded ? 1 : $maxRound;
        }

        return Inertia::render('events/games/index', [
            'title' => 'Games',
            'backUrl' => route('events.index'),
            'games' => $event->games()
                ->where('round', $round)
                ->with('players')
                ->orderBy('court')
                ->get(),
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
