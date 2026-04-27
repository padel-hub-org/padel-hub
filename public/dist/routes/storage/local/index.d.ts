import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../wayfinder";
/**
 * @see vendor/laravel/framework/src/Illuminate/Filesystem/FilesystemServiceProvider.php:119
 * @route '/storage/{path}'
 */
export declare const upload: {
    (
        args:
            | {
                  path: string | number;
              }
            | [path: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): RouteDefinition<"put">;
    definition: {
        methods: ["put"];
        url: string;
    };
    url(
        args:
            | {
                  path: string | number;
              }
            | [path: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): string;
    put(
        args:
            | {
                  path: string | number;
              }
            | [path: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): RouteDefinition<"put">;
};
declare const local: {
    upload: {
        (
            args:
                | {
                      path: string | number;
                  }
                | [path: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): RouteDefinition<"put">;
        definition: {
            methods: ["put"];
            url: string;
        };
        url(
            args:
                | {
                      path: string | number;
                  }
                | [path: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): string;
        put(
            args:
                | {
                      path: string | number;
                  }
                | [path: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): RouteDefinition<"put">;
    };
};
export default local;
//# sourceMappingURL=index.d.ts.map
