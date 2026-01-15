<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Inertia\Inertia;
use Inertia\Response;

class EventSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Event $event): Response
    {
        return Inertia::render('events/settings/index', [
            'title' => 'Settings',
            'event' => $event->load('players'),
        ]);
    }
}
