<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Models\Event;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): void
    {
        //
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
    public function store(StoreEventRequest $request): void
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event): void
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event): void
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event): void
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event): void
    {
        //
    }
}
