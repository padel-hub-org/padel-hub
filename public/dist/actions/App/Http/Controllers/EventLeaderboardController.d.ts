import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../../wayfinder";
/**
 * @see \App\Http\Controllers\EventLeaderboardController::index
 * @see app/Http/Controllers/EventLeaderboardController.php:16
 * @route '/events/{event}/leaderboard'
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
declare const EventLeaderboardController: {
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
export default EventLeaderboardController;
//# sourceMappingURL=EventLeaderboardController.d.ts.map
