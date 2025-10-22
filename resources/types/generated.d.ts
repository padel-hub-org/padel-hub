declare namespace App.Models {
    export type Player = {
        name: string;
        rating: number;
        incrementing: boolean;
        preventsLazyLoading: boolean;
        exists: boolean;
        wasRecentlyCreated: boolean;
        timestamps: boolean;
        usesUniqueIds: boolean;
    };
    export type User = {
        name: string;
        email: string;
        incrementing: boolean;
        preventsLazyLoading: boolean;
        exists: boolean;
        wasRecentlyCreated: boolean;
        timestamps: boolean;
        usesUniqueIds: boolean;
    };
}
