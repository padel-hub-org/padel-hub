<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateCourtRequest;
use App\Models\Court;

class CourtController extends Controller
{
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourtRequest $request, Court $court)
    {
        $court->update($request->validated());
        return back();
    }
}
