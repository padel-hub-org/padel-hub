import type { Player } from "./Player";
export declare enum Result {
    Win = "win",
    Loss = "loss",
    Tie = "tie",
}
export interface GamePlayer extends Player {
    pivot: {
        previous_rating: number | null;
        points: number | null;
        partner_id: number;
        result: Result | null;
    };
}
//# sourceMappingURL=GamePlayer.d.ts.map
