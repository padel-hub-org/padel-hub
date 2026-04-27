import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../../wayfinder";
/**
 * @see \Fruitcake\LaravelDebugbar\Controllers\AssetController::getAssets
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/AssetController.php:16
 * @route '/_debugbar/assets'
 */
export declare const getAssets: {
    (options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    get(options?: RouteQueryOptions): RouteDefinition<"get">;
    head(options?: RouteQueryOptions): RouteDefinition<"head">;
};
declare const AssetController: {
    getAssets: {
        (options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        get(options?: RouteQueryOptions): RouteDefinition<"get">;
        head(options?: RouteQueryOptions): RouteDefinition<"head">;
    };
};
export default AssetController;
//# sourceMappingURL=AssetController.d.ts.map
