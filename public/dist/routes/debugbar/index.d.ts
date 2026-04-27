import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../wayfinder";
/**
 * @see \Fruitcake\LaravelDebugbar\Controllers\OpenHandlerController::openhandler
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:18
 * @route '/_debugbar/open'
 */
export declare const openhandler: {
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
 * @see \Fruitcake\LaravelDebugbar\Controllers\OpenHandlerController::clockwork
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:49
 * @route '/_debugbar/clockwork/{id}'
 */
export declare const clockwork: {
    (
        args:
            | {
                  id: string | number;
              }
            | [id: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(
        args:
            | {
                  id: string | number;
              }
            | [id: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): string;
    get(
        args:
            | {
                  id: string | number;
              }
            | [id: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): RouteDefinition<"get">;
    head(
        args:
            | {
                  id: string | number;
              }
            | [id: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): RouteDefinition<"head">;
};
/**
 * @see \Fruitcake\LaravelDebugbar\Controllers\AssetController::assets
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/AssetController.php:16
 * @route '/_debugbar/assets'
 */
export declare const assets: {
    (options?: RouteQueryOptions): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    get(options?: RouteQueryOptions): RouteDefinition<"get">;
    head(options?: RouteQueryOptions): RouteDefinition<"head">;
};
declare const debugbar: {
    openhandler: {
        (options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        get(options?: RouteQueryOptions): RouteDefinition<"get">;
        head(options?: RouteQueryOptions): RouteDefinition<"head">;
    };
    cache: {
        delete: {
            (
                args:
                    | {
                          key: string | number;
                      }
                    | [key: string | number]
                    | string
                    | number,
                options?: RouteQueryOptions,
            ): RouteDefinition<"delete">;
            definition: {
                methods: ["delete"];
                url: string;
            };
            url(
                args:
                    | {
                          key: string | number;
                      }
                    | [key: string | number]
                    | string
                    | number,
                options?: RouteQueryOptions,
            ): string;
            delete(
                args:
                    | {
                          key: string | number;
                      }
                    | [key: string | number]
                    | string
                    | number,
                options?: RouteQueryOptions,
            ): RouteDefinition<"delete">;
        };
    };
    queries: {
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
    clockwork: {
        (
            args:
                | {
                      id: string | number;
                  }
                | [id: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(
            args:
                | {
                      id: string | number;
                  }
                | [id: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): string;
        get(
            args:
                | {
                      id: string | number;
                  }
                | [id: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): RouteDefinition<"get">;
        head(
            args:
                | {
                      id: string | number;
                  }
                | [id: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): RouteDefinition<"head">;
    };
    assets: {
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
export default debugbar;
//# sourceMappingURL=index.d.ts.map
