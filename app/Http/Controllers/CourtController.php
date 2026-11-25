<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCourtRequest;
use App\Http\Requests\UpdateCourtRequest;
use App\Models\Court;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class CourtController extends Controller
{
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourtRequest $request, Court $court): RedirectResponse
    {
        $court->update($request->validated());

        return back();
    }

    /**
     * store the specified resource in storage.
     */
    public function store(StoreCourtRequest $request): RedirectResponse
    {
        Court::query()->create($request->validated());

        return back();
    }

    /**
     * destory the specified resource from storage.
     */
    public function destroy(Court $court): RedirectResponse
    {
        if (Court::query()->where('event_id', $court->event_id)->count() <= 1) {
            Inertia::flash('toast', ['type' => 'warning', 'message' => 'Must at least have one court.']);

            return back();
        }

        $court->delete();

        return back();
    }
}
