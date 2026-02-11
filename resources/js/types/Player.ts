import type { User } from "./User";

export interface Player {
    id: number;
    name: string;
    rating: number;
    deleted_at: string | null;
    user?: User;
}
