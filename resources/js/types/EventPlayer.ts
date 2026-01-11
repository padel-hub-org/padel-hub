import type { Player } from "./Player";

export interface EventPlayer extends Player {
    pivot: {
        event_rating: number;
        disabled_at: string | null;
    };
}
