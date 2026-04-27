export type QueryParams = {
    [key: string]:
        | string
        | number
        | boolean
        | (string | number)[]
        | null
        | undefined
        | QueryParams;
};
type Method = "get" | "post" | "put" | "delete" | "patch" | "head" | "options";
type UrlDefaults = Record<string, unknown>;
export type RouteDefinition<TMethod extends Method | Method[]> = {
    url: string;
} & (TMethod extends Method[]
    ? {
          methods: TMethod;
      }
    : {
          method: TMethod;
      });
export type RouteFormDefinition<TMethod extends Method> = {
    action: string;
    method: TMethod;
};
export type RouteQueryOptions = {
    query?: QueryParams;
    mergeQuery?: QueryParams;
};
export declare const queryParams: (options?: RouteQueryOptions) => string;
export declare const setUrlDefaults: (
    params: UrlDefaults | (() => UrlDefaults),
) => void;
export declare const addUrlDefault: (
    key: string,
    value: string | number | boolean,
) => void;
export declare const applyUrlDefaults: <T extends UrlDefaults | undefined>(
    existing: T,
) => T;
export declare const validateParameters: (
    args: Record<string, unknown> | undefined,
    optional: string[],
) => void;
export {};
//# sourceMappingURL=index.d.ts.map
