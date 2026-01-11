import type { EventPlayer } from "./EventPlayer";

export interface EventLeaderboardPlayer extends EventPlayer {
    games_count: number;
    games_won: number;
    games_lost: number;
    games_tied: number;
}
