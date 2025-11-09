<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
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
    Route::resource('players', PlayerController::class)->except(['show']);
    Route::resource('events', EventController::class);

    Route::name('logout')->post('/logout', [AuthController::class, 'logout']);
});
