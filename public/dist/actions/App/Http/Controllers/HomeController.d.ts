import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../../wayfinder";
/**
 * @see \App\Http\Controllers\HomeController::index
 * @see app/Http/Controllers/HomeController.php:11
 * @route '/'
 */
export declare const index: {
    (options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    get(options?: RouteQueryOptions): RouteDefinition<"get">;
    head(options?: RouteQueryOptions): RouteDefinition<"head">;
};
declare const HomeController: {
    index: {
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
export default HomeController;
//# sourceMappingURL=HomeController.d.ts.map
