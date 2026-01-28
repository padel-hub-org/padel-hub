<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateGameRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        /** @var \App\Models\Game $game */
        $game = $this->route('game');

        return [
            'points' => ['required', 'integer', 'min:0', "max:{$game->event->game_points}"],
            'players' => ['required', 'array', 'min:2', 'max:2'],
            'players.*' => ['integer', Rule::exists('game_player', 'player_id')->where('game_id', $game->id)],
        ];
    }
}
