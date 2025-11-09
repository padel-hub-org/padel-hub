import type { Event } from "./Event";
import type { Player } from "./Player";

export interface Game {
    id: number;
    event_id: number;
    court: number;
    round: number;
    created_at: string;
    updated_at: string;

    event?: Event;
    players?: Player[]; // Possibly change to intermediate type with pivot values
}