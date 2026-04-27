import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../wayfinder";
/**
 * @see \App\Http\Controllers\EventSettingController::index
 * @see app/Http/Controllers/EventSettingController.php:14
 * @route '/events/{event}/settings'
 */
export declare const index: {
    (
        args:
            | {
                  event:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  event:
                      | number
                      | {
                            id: number;
                        },
              ]
            | number
            | {
                  id: number;
              },
        options?: RouteQueryOptions,
    ): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(
        args:
            | {
                  event:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  event:
                      | number
                      | {
                            id: number;
                        },
              ]
            | number
            | {
                  id: number;
              },
        options?: RouteQueryOptions,
    ): string;
    get(
        args:
            | {
                  event:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  event:
                      | number
                      | {
                            id: number;
                        },
              ]
            | number
            | {
                  id: number;
              },
        options?: RouteQueryOptions,
    ): RouteDefinition<"get">;
    head(
        args:
            | {
                  event:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  event:
                      | number
                      | {
                            id: number;
                        },
              ]
            | number
            | {
                  id: number;
              },
        options?: RouteQueryOptions,
    ): RouteDefinition<"head">;
};
declare const settings: {
    index: {
        (
            args:
                | {
                      event:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      event:
                          | number
                          | {
                                id: number;
                            },
                  ]
                | number
                | {
                      id: number;
                  },
            options?: RouteQueryOptions,
        ): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(
            args:
                | {
                      event:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      event:
                          | number
                          | {
                                id: number;
                            },
                  ]
                | number
                | {
                      id: number;
                  },
            options?: RouteQueryOptions,
        ): string;
        get(
            args:
                | {
                      event:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      event:
                          | number
                          | {
                                id: number;
                            },
                  ]
                | number
                | {
                      id: number;
                  },
            options?: RouteQueryOptions,
        ): RouteDefinition<"get">;
        head(
            args:
                | {
                      event:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      event:
                          | number
                          | {
                                id: number;
                            },
                  ]
                | number
                | {
                      id: number;
                  },
            options?: RouteQueryOptions,
        ): RouteDefinition<"head">;
    };
};
export default settings;
//# sourceMappingURL=index.d.ts.map
