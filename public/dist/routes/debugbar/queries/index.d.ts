import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../wayfinder";
/**
 * @see \Fruitcake\LaravelDebugbar\Controllers\QueriesController::explain
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/QueriesController.php:17
 * @route '/_debugbar/queries/explain'
 */
export declare const explain: {
    (options?: RouteQueryOptions): RouteDefinition<"post">;
    definition: {
        methods: ["post"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    post(options?: RouteQueryOptions): RouteDefinition<"post">;
};
declare const queries: {
    explain: {
        (options?: RouteQueryOptions): RouteDefinition<"post">;
        definition: {
            methods: ["post"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        post(options?: RouteQueryOptions): RouteDefinition<"post">;
    };
};
export default queries;
//# sourceMappingURL=index.d.ts.map
