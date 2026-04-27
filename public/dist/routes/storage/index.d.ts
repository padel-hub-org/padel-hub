import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../wayfinder";
/**
 * @see vendor/laravel/framework/src/Illuminate/Filesystem/FilesystemServiceProvider.php:111
 * @route '/storage/{path}'
 */
export declare const local: {
    (
        args:
            | {
                  path: string | number;
              }
            | [path: string | number]
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
                  path: string | number;
              }
            | [path: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): string;
    get(
        args:
            | {
                  path: string | number;
              }
            | [path: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): RouteDefinition<"get">;
    head(
        args:
            | {
                  path: string | number;
              }
            | [path: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): RouteDefinition<"head">;
};
declare const storage: {
    local: {
        (
            args:
                | {
                      path: string | number;
                  }
                | [path: string | number]
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
                      path: string | number;
                  }
                | [path: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): string;
        get(
            args:
                | {
                      path: string | number;
                  }
                | [path: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): RouteDefinition<"get">;
        head(
            args:
                | {
                      path: string | number;
                  }
                | [path: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): RouteDefinition<"head">;
    } & {
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
};
export default storage;
//# sourceMappingURL=index.d.ts.map
