<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateCourtRequest;
use App\Models\Court;
use Illuminate\Http\RedirectResponse;

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
}
