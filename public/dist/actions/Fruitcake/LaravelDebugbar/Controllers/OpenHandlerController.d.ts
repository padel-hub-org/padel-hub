import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../../wayfinder";
/**
 * @see \Fruitcake\LaravelDebugbar\Controllers\OpenHandlerController::handle
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/OpenHandlerController.php:18
 * @route '/_debugbar/open'
 */
export declare const handle: {
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
declare const OpenHandlerController: {
    handle: {
        (options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        get(options?: RouteQueryOptions): RouteDefinition<"get">;
        head(options?: RouteQueryOptions): RouteDefinition<"head">;
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
};
export default OpenHandlerController;
//# sourceMappingURL=OpenHandlerController.d.ts.map
