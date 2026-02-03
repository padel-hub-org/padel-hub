<?php

namespace App\Services;

use App\Models\Event;
use App\Models\GamePlayer;
use App\Models\Player;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class RoundService
{
    private const SPREAD_LAMBDA = 0.25;

    private int $round;

    private int $playersCount;

    private int $courtCount;

    /**
     * Create a new class instance.
     */
    public function __construct(private Event $event)
    {
        $this->round = $this->event->games()->max('round') + 1;
        $this->playersCount = $this->event->players()
            ->wherePivot('disabled_at', null)
            ->count();

        $this->courtCount = min($this->event->court_count, floor($this->playersCount / 4));
    }

    public static function event(Event $event): self
    {
        return new self($event);
    }

    public function getAvailablePlayersCount(): int
    {
        return $this->playersCount;
    }

    public function hasUnregisteredResults(): bool
    {
        $unregisteredResultsCount = $this->event->games()
            ->whereRelation('gamePlayers', 'result', null)
            ->count();

        return $unregisteredResultsCount > 0;
    }

    public function generateNewRound(): void
    {
        $players = $this->getPlayingPlayers();

        for ($i = 0; $i < $this->courtCount; $i++) {
            $courtPlayers = $players->splice(0, 4);

            /** @var \Illuminate\Support\Collection<int, \Illuminate\Support\Collection<int, int>> $history */
            $history = GamePlayer::query()
                ->join('games', 'game_player.game_id', '=', 'games.id')
                ->where('games.event_id', $this->event->id)
                ->whereIn('game_player.player_id', $courtPlayers->pluck('id'))
                ->whereIn('game_player.partner_id', $courtPlayers->pluck('id'))
                ->select('game_player.player_id', 'game_player.partner_id', DB::raw('count(*) as count'))
                ->groupBy('game_player.player_id', 'game_player.partner_id')
                ->get()
                ->groupBy('player_id')
                ->map(fn ($items) => $items->pluck('count', 'partner_id'));

            // Ordered by most prefered combinations: (0,2) vs (1,3)
            $potentialGames = [
                [
                    'team1' => ['player1' => $courtPlayers[0], 'player2' => $courtPlayers[2]],
                    'team2' => ['player1' => $courtPlayers[1], 'player2' => $courtPlayers[3]],
                ],
                [
                    'team1' => ['player1' => $courtPlayers[0], 'player2' => $courtPlayers[3]],
                    'team2' => ['player1' => $courtPlayers[1], 'player2' => $courtPlayers[2]],
                ],
                [
                    'team1' => ['player1' => $courtPlayers[0], 'player2' => $courtPlayers[1]],
                    'team2' => ['player1' => $courtPlayers[2], 'player2' => $courtPlayers[3]],
                ],
            ];

            $bestGame = $this->findBestTeams($potentialGames, $history);

            $game = $this->event->games()->create([
                'round' => $this->round,
                'court' => $i,
            ]);

            $team1 = $bestGame['team1'];
            $team2 = $bestGame['team2'];

            $game->players()->attach([
                $team1['player1']->id => [
                    'partner_id' => $team1['player2']->id,
                    'previous_event_rating' => $team1['player1']->pivot->event_rating,
                    'previous_player_rating' => $team1['player1']->rating,
                ],
                $team1['player2']->id => [
                    'partner_id' => $team1['player1']->id,
                    'previous_event_rating' => $team1['player2']->pivot->event_rating,
                    'previous_player_rating' => $team1['player2']->rating,
                ],
                $team2['player1']->id => [
                    'partner_id' => $team2['player2']->id,
                    'previous_event_rating' => $team2['player1']->pivot->event_rating,
                    'previous_player_rating' => $team2['player1']->rating,
                ],
                $team2['player2']->id => [
                    'partner_id' => $team2['player1']->id,
                    'previous_event_rating' => $team2['player2']->pivot->event_rating,
                    'previous_player_rating' => $team2['player2']->rating,
                ],
            ]);
        }
    }

    /**
     * @param  array<int, array{team1: array{player1: Player, player2: Player}, team2: array{player1: Player, player2: Player}}>  $potentialGames
     * @param  \Illuminate\Support\Collection<int, \Illuminate\Support\Collection<int, int>>  $history
     * @return array{team1: array{player1: Player, player2: Player}, team2: array{player1: Player, player2: Player}}
     */
    private function findBestTeams(array $potentialGames, \Illuminate\Support\Collection $history): array
    {
        $bestGame = null;
        $lowestScore = PHP_INT_MAX;

        foreach ($potentialGames as $potentialGame) {
            $team1TogetherCount = $history->get($potentialGame['team1']['player1']->id)?->get($potentialGame['team1']['player2']->id, 0) ?? 0;
            $team2TogetherCount = $history->get($potentialGame['team2']['player1']->id)?->get($potentialGame['team2']['player2']->id, 0) ?? 0;

            $togetherMean = ($team1TogetherCount + $team2TogetherCount) / 2;
            $spread = abs($team1TogetherCount - $team2TogetherCount);
            $score = $togetherMean + self::SPREAD_LAMBDA * $spread;

            if ($score < $lowestScore) {
                $lowestScore = $score;
                $bestGame = $potentialGame;
            }
        }

        return $bestGame;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection<int, \App\Models\Player>
     */
    private function getPlayingPlayers(): Collection
    {
        $pausePlayers = $this->getPlayersPausedThisRound();

        return $this->event->players()
            ->wherePivot('disabled_at', null)
            ->whereNotIn('players.id', $pausePlayers->pluck('id'))
            ->orderByPivot('event_rating', 'desc')
            ->get();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection<int, Player>
     */
    private function getPlayersPausedThisRound(): Collection
    {
        $capacity = $this->courtCount * 4;
        $pausePlayersCount = $this->playersCount - $capacity;

        return $this->event->players()
            ->wherePivot('disabled_at', null)
            ->withCount([
                'games' => function (Builder $query) {
                    $query->where('games.event_id', $this->event->id);
                },
            ])
            ->orderByDesc('games_count')
            ->inRandomOrder()
            ->limit($pausePlayersCount)
            ->get();
    }
}
