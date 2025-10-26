import type { User } from "./User";

export interface Player {
    id: number;
    name: string;
    rating: number;

    user?: User;
}