<?php

use App\Http\Controllers\PlayerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home', ['name' => 'Developer']);
});

Route::resource('players', PlayerController::class)->except(["show"]);
