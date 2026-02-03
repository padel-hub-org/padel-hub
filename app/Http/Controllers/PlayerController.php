<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePlayerRequest;
use App\Http\Requests\UpdatePlayerRequest;
use App\Models\Player;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $validated = $request->validate([
            'search' => 'nullable|string|max:255',
        ]);

        $query = Player::query();

        if (! empty($validated['search'])) {
            $query->where('name', 'ilike', '%'.$validated['search'].'%');
        }

        return Inertia::render('players/index', [
            'players' => Inertia::scroll(fn () => $query->orderBy('name')->paginate(50)),
            'search' => $validated['search'] ?? '',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Player $player): Response
    {
        return Inertia::render('players/show', ['player' => $player, 'backUrl' => route('players.index')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('players/create', ['backUrl' => route('players.index')]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlayerRequest $request): RedirectResponse
    {
        Player::create($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Player created successfully.']);

        return redirect()->route('players.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Player $player): RedirectResponse
    {
        return redirect()->route('players.show', $player);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePlayerRequest $request, Player $player): RedirectResponse
    {
        $player->update($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Player updated successfully.']);

        return redirect()->route('players.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Player $player): RedirectResponse
    {
        $player->delete();

        Inertia::flash('toast', ['type' => 'success', 'message' => 'Player deleted successfully.']);

        return back();
    }
}
