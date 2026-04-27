import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../wayfinder";
/**
 * @see \Fruitcake\LaravelDebugbar\Controllers\CacheController::deleteMethod
 * @see vendor/barryvdh/laravel-debugbar/src/Controllers/CacheController.php:16
 * @route '/_debugbar/cache/{key}'
 */
export declare const deleteMethod: {
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
declare const cache: {
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
export default cache;
//# sourceMappingURL=index.d.ts.map
