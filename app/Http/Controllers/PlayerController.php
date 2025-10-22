<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePlayerRequest;
use App\Http\Requests\UpdatePlayerRequest;
use App\Models\Player;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class PlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $players = Player::query()->orderBy("name")->get();
        return Inertia::render('players/index', ["players" => $players]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('players/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlayerRequest $request): RedirectResponse
    {
        Player::create($request->validated());
        return redirect()->route("players.index");
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Player $player): Response
    {
        return Inertia::render('players/edit', ["player" => $player]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePlayerRequest $request, Player $player): RedirectResponse
    {
        $player->update($request->validated());
        return redirect()->route("players.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Player $player): RedirectResponse
    {
        $player->delete();
        return back();
    }
}
