declare namespace App.Models {
export type Player = {
id: number | null;
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
id: number | null;
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
