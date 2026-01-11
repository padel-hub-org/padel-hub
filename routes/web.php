<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventGameController;
use App\Http\Controllers\EventLeaderboardController;
use App\Http\Controllers\EventPlayerController;
use App\Http\Controllers\EventSettingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PlayerController;
use Illuminate\Support\Facades\Route;

Route::name('home')->get('/', [HomeController::class, 'index']);
Route::name('login')->get('/login', [AuthController::class, 'index']);

Route::middleware('guest')->group(function () {
    Route::name('redirectToGoogle')->get('/auth/google/redirect', [AuthController::class, 'redirectToGoogle']);
    Route::get('/auth/google/callback', [AuthController::class, 'handleGoogleCallback']);
});

Route::middleware('auth')->group(function () {
    Route::resource('players', PlayerController::class);
    Route::resource('events', EventController::class);
    Route::name('events.players.disabled')->put('/events/{event}/players/{player}/disabled', [EventController::class, 'setDisabled']);
    Route::resource('events.players', EventPlayerController::class);
    Route::resource('events.settings', EventSettingController::class)->only('index');
    Route::resource('events.games', EventGameController::class);
    Route::resource('events.leaderboard', EventLeaderboardController::class)->only('index');

    Route::name('logout')->post('/logout', [AuthController::class, 'logout']);
});
