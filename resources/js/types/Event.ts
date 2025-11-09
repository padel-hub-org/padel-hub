import type { Game } from "./Game";
import type { Player } from "./Player";

export interface Event {
    id: number;
    starts_at: string;
    court_count: number;
    game_points: number;
    ended_at: string | null;
    created_at: string;
    updated_at: string;

    players_count?: number;

    games?: Game[];
    players?: Player[]; // Possibly change this to an intermediate type with pivot values

}