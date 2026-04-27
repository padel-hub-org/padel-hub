import { type RouteQueryOptions, type RouteDefinition } from "./../wayfinder";
/**
 * @see \App\Http\Controllers\HomeController::home
 * @see app/Http/Controllers/HomeController.php:11
 * @route '/'
 */
export declare const home: {
    (options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    get(options?: RouteQueryOptions): RouteDefinition<"get">;
    head(options?: RouteQueryOptions): RouteDefinition<"head">;
};
/**
 * @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:16
 * @route '/login'
 */
export declare const login: {
    (options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    get(options?: RouteQueryOptions): RouteDefinition<"get">;
    head(options?: RouteQueryOptions): RouteDefinition<"head">;
};
/**
 * @see \App\Http\Controllers\AuthController::redirectToGoogle
 * @see app/Http/Controllers/AuthController.php:25
 * @route '/auth/google/redirect'
 */
export declare const redirectToGoogle: {
    (options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    get(options?: RouteQueryOptions): RouteDefinition<"get">;
    head(options?: RouteQueryOptions): RouteDefinition<"head">;
};
/**
 * @see \App\Http\Controllers\AuthController::logout
 * @see app/Http/Controllers/AuthController.php:51
 * @route '/logout'
 */
export declare const logout: {
    (options?: RouteQueryOptions): RouteDefinition<"post">;
    definition: {
        methods: ["post"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    post(options?: RouteQueryOptions): RouteDefinition<"post">;
};
//# sourceMappingURL=index.d.ts.map
