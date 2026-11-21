<?php

namespace App\Http\Requests;

use App\Models\Game;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

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
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        /** @var Game $game */
        $game = $this->route('game');

        return [
            'pointsA' => ['required', 'integer', 'min:' . ((int) $this->input('pointsB') === 0 ? 1 : 0), 'max:' . ($game->event->game_points ?? 100)],
            'pointsB' => ['required', 'integer', 'min:0', 'max:' . ($game->event->game_points ?? 100)],
            'playersA' => ['required', 'array', 'min:2', 'max:2'],
            'playersB' => ['required', 'array', 'min:2', 'max:2'],
            'playersA.*' => ['required', 'integer', Rule::exists('game_player', 'player_id')->where('game_id', $game->id)],
            'playersB.*' => ['required', 'integer', Rule::exists('game_player', 'player_id')->where('game_id', $game->id)],
        ];
    }
}
