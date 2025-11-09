<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'starts_at_date' => ['required', 'date'],
            'starts_at_time' => ['required', 'string'],
            'court_count' => ['required', 'integer', 'min:1', 'max:16'],
            'game_points' => ['required', 'integer', 'min:1', 'max:255'],
        ];
    }
}
