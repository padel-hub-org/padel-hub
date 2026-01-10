import type { Event } from "./Event";
import type { GamePlayer } from "./GamePlayer";

export interface Game {
    id: number;
    event_id: number;
    court: number;
    round: number;
    created_at: string;
    updated_at: string;

    event?: Event;
    players?: GamePlayer[];
}
