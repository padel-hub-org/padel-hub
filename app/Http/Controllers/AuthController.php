<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;
use Laravel\Socialite\Two\User as SocialiteUser;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response as HttpFoundationResponse;

class AuthController extends Controller
{
    public function index(): Response|RedirectResponse
    {
        if (Auth::check()) {
            return redirect()->intended('/players');
        }

        return Inertia::render('auth/index');
    }

    public function redirectToGoogle(): HttpFoundationResponse
    {
        return Inertia::location(Socialite::driver('google')->redirect()->getTargetUrl());
    }

    public function handleGoogleCallback(): RedirectResponse
    {
        /** @var SocialiteUser $user */
        $user = Socialite::driver('google')->user();

        $authUser = User::updateOrCreate([
            'email' => $user->getEmail(),
        ], [
            'name' => $user->getName(),
        ]);

        $authUser->email_verified_at = now();
        $authUser->save();

        Auth::login($authUser, true);

        Inertia::flash("toast", ["type" => "success", "message" => "Logged in successfully."]);

        return redirect()->intended('/');
    }

    public function logout(): RedirectResponse
    {
        Auth::logout();

        Inertia::flash("toast", ["type" => "success", "message" => "Logged out successfully."]);

        return redirect()->route('home');
    }
}
