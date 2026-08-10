import type { Player } from "./Player";

export enum Result {
    Win = "win",
    Loss = "loss",
    Tie = "tie",
}

export interface GamePlayer extends Player {
    pivot: {
        previous_event_rating: number | null;
        previous_player_rating: number | null;
        points: number | null;
        partner_id: number;
        result: Result | null;
    };
}
