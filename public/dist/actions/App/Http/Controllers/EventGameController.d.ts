import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../../wayfinder";
/**
 * @see \App\Http\Controllers\EventGameController::index
 * @see app/Http/Controllers/EventGameController.php:22
 * @route '/events/{event}/games'
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
/**
 * @see \App\Http\Controllers\EventGameController::store
 * @see app/Http/Controllers/EventGameController.php:60
 * @route '/events/{event}/games'
 */
export declare const store: {
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
    ): RouteDefinition<"post">;
    definition: {
        methods: ["post"];
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
    post(
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
    ): RouteDefinition<"post">;
};
/**
 * @see \App\Http\Controllers\EventGameController::update
 * @see app/Http/Controllers/EventGameController.php:100
 * @route '/events/{event}/games/{game}'
 */
export declare const update: {
    (
        args:
            | {
                  event:
                      | number
                      | {
                            id: number;
                        };
                  game:
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
                  game:
                      | number
                      | {
                            id: number;
                        },
              ],
        options?: RouteQueryOptions,
    ): RouteDefinition<"put">;
    definition: {
        methods: ["put", "patch"];
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
                  game:
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
                  game:
                      | number
                      | {
                            id: number;
                        },
              ],
        options?: RouteQueryOptions,
    ): string;
    put(
        args:
            | {
                  event:
                      | number
                      | {
                            id: number;
                        };
                  game:
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
                  game:
                      | number
                      | {
                            id: number;
                        },
              ],
        options?: RouteQueryOptions,
    ): RouteDefinition<"put">;
    patch(
        args:
            | {
                  event:
                      | number
                      | {
                            id: number;
                        };
                  game:
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
                  game:
                      | number
                      | {
                            id: number;
                        },
              ],
        options?: RouteQueryOptions,
    ): RouteDefinition<"patch">;
};
declare const EventGameController: {
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
    store: {
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
        ): RouteDefinition<"post">;
        definition: {
            methods: ["post"];
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
        post(
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
        ): RouteDefinition<"post">;
    };
    update: {
        (
            args:
                | {
                      event:
                          | number
                          | {
                                id: number;
                            };
                      game:
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
                      game:
                          | number
                          | {
                                id: number;
                            },
                  ],
            options?: RouteQueryOptions,
        ): RouteDefinition<"put">;
        definition: {
            methods: ["put", "patch"];
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
                      game:
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
                      game:
                          | number
                          | {
                                id: number;
                            },
                  ],
            options?: RouteQueryOptions,
        ): string;
        put(
            args:
                | {
                      event:
                          | number
                          | {
                                id: number;
                            };
                      game:
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
                      game:
                          | number
                          | {
                                id: number;
                            },
                  ],
            options?: RouteQueryOptions,
        ): RouteDefinition<"put">;
        patch(
            args:
                | {
                      event:
                          | number
                          | {
                                id: number;
                            };
                      game:
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
                      game:
                          | number
                          | {
                                id: number;
                            },
                  ],
            options?: RouteQueryOptions,
        ): RouteDefinition<"patch">;
    };
};
export default EventGameController;
//# sourceMappingURL=EventGameController.d.ts.map
