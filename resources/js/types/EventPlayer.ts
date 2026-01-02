import type { Player } from "./Player";

export interface EventPlayer extends Player {
    pivot: {
        disabled_at: string | null;
    };
}
