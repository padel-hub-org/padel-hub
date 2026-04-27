declare const Fruitcake: {
    LaravelDebugbar: {
        Controllers: {
            OpenHandlerController: {
                handle: {
                    (
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"get">;
                    definition: {
                        methods: ["get", "head"];
                        url: string;
                    };
                    url(
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): string;
                    get(
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"get">;
                    head(
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"head">;
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
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"get">;
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
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): string;
                    get(
                        args:
                            | {
                                  id: string | number;
                              }
                            | [id: string | number]
                            | string
                            | number,
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"get">;
                    head(
                        args:
                            | {
                                  id: string | number;
                              }
                            | [id: string | number]
                            | string
                            | number,
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"head">;
                };
            };
            CacheController: {
                deleteMethod: {
                    (
                        args:
                            | {
                                  key: string | number;
                              }
                            | [key: string | number]
                            | string
                            | number,
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"delete">;
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
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): string;
                    delete(
                        args:
                            | {
                                  key: string | number;
                              }
                            | [key: string | number]
                            | string
                            | number,
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"delete">;
                };
                delete: {
                    (
                        args:
                            | {
                                  key: string | number;
                              }
                            | [key: string | number]
                            | string
                            | number,
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"delete">;
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
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): string;
                    delete(
                        args:
                            | {
                                  key: string | number;
                              }
                            | [key: string | number]
                            | string
                            | number,
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"delete">;
                };
            };
            QueriesController: {
                explain: {
                    (
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"post">;
                    definition: {
                        methods: ["post"];
                        url: string;
                    };
                    url(
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): string;
                    post(
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"post">;
                };
            };
            AssetController: {
                getAssets: {
                    (
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"get">;
                    definition: {
                        methods: ["get", "head"];
                        url: string;
                    };
                    url(
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): string;
                    get(
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"get">;
                    head(
                        options?: import("../../wayfinder").RouteQueryOptions,
                    ): import("../../wayfinder").RouteDefinition<"head">;
                };
            };
        };
    };
};
export default Fruitcake;
//# sourceMappingURL=index.d.ts.map
