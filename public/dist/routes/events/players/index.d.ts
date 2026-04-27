import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../wayfinder";
/**
 * @see \App\Http\Controllers\EventController::disabled
 * @see app/Http/Controllers/EventController.php:71
 * @route '/events/{event}/players/{player}/disabled'
 */
export declare const disabled: {
    (
        args:
            | {
                  event:
                      | number
                      | {
                            id: number;
                        };
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        },
              ],
        options?: RouteQueryOptions,
    ): RouteDefinition<"put">;
    definition: {
        methods: ["put"];
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
                  player:
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
                  player:
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
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        },
              ],
        options?: RouteQueryOptions,
    ): RouteDefinition<"put">;
};
/**
 * @see \App\Http\Controllers\EventPlayerController::index
 * @see app/Http/Controllers/EventPlayerController.php:18
 * @route '/events/{event}/players'
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
 * @see \App\Http\Controllers\EventPlayerController::create
 * @see app/Http/Controllers/EventPlayerController.php:0
 * @route '/events/{event}/players/create'
 */
export declare const create: {
    (
        args:
            | {
                  event: string | number;
              }
            | [event: string | number]
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
                  event: string | number;
              }
            | [event: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): string;
    get(
        args:
            | {
                  event: string | number;
              }
            | [event: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): RouteDefinition<"get">;
    head(
        args:
            | {
                  event: string | number;
              }
            | [event: string | number]
            | string
            | number,
        options?: RouteQueryOptions,
    ): RouteDefinition<"head">;
};
/**
 * @see \App\Http\Controllers\EventPlayerController::store
 * @see app/Http/Controllers/EventPlayerController.php:47
 * @route '/events/{event}/players'
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
 * @see \App\Http\Controllers\EventPlayerController::show
 * @see app/Http/Controllers/EventPlayerController.php:0
 * @route '/events/{event}/players/{player}'
 */
export declare const show: {
    (
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): string;
    get(
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): RouteDefinition<"get">;
    head(
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): RouteDefinition<"head">;
};
/**
 * @see \App\Http\Controllers\EventPlayerController::edit
 * @see app/Http/Controllers/EventPlayerController.php:0
 * @route '/events/{event}/players/{player}/edit'
 */
export declare const edit: {
    (
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): RouteDefinition<"get">;
    definition: {
        methods: ["get", "head"];
        url: string;
    };
    url(
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): string;
    get(
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): RouteDefinition<"get">;
    head(
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): RouteDefinition<"head">;
};
/**
 * @see \App\Http\Controllers\EventPlayerController::update
 * @see app/Http/Controllers/EventPlayerController.php:0
 * @route '/events/{event}/players/{player}'
 */
export declare const update: {
    (
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): RouteDefinition<"put">;
    definition: {
        methods: ["put", "patch"];
        url: string;
    };
    url(
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): string;
    put(
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): RouteDefinition<"put">;
    patch(
        args:
            | {
                  event: string | number;
                  player: string | number;
              }
            | [event: string | number, player: string | number],
        options?: RouteQueryOptions,
    ): RouteDefinition<"patch">;
};
/**
 * @see \App\Http\Controllers\EventPlayerController::destroy
 * @see app/Http/Controllers/EventPlayerController.php:63
 * @route '/events/{event}/players/{player}'
 */
export declare const destroy: {
    (
        args:
            | {
                  event:
                      | number
                      | {
                            id: number;
                        };
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        },
              ],
        options?: RouteQueryOptions,
    ): RouteDefinition<"delete">;
    definition: {
        methods: ["delete"];
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
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        },
              ],
        options?: RouteQueryOptions,
    ): string;
    delete(
        args:
            | {
                  event:
                      | number
                      | {
                            id: number;
                        };
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        },
              ],
        options?: RouteQueryOptions,
    ): RouteDefinition<"delete">;
};
declare const players: {
    disabled: {
        (
            args:
                | {
                      event:
                          | number
                          | {
                                id: number;
                            };
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            },
                  ],
            options?: RouteQueryOptions,
        ): RouteDefinition<"put">;
        definition: {
            methods: ["put"];
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
                      player:
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
                      player:
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
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            },
                  ],
            options?: RouteQueryOptions,
        ): RouteDefinition<"put">;
    };
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
    create: {
        (
            args:
                | {
                      event: string | number;
                  }
                | [event: string | number]
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
                      event: string | number;
                  }
                | [event: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): string;
        get(
            args:
                | {
                      event: string | number;
                  }
                | [event: string | number]
                | string
                | number,
            options?: RouteQueryOptions,
        ): RouteDefinition<"get">;
        head(
            args:
                | {
                      event: string | number;
                  }
                | [event: string | number]
                | string
                | number,
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
    show: {
        (
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): string;
        get(
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): RouteDefinition<"get">;
        head(
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): RouteDefinition<"head">;
    };
    edit: {
        (
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): string;
        get(
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): RouteDefinition<"get">;
        head(
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): RouteDefinition<"head">;
    };
    update: {
        (
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): RouteDefinition<"put">;
        definition: {
            methods: ["put", "patch"];
            url: string;
        };
        url(
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): string;
        put(
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): RouteDefinition<"put">;
        patch(
            args:
                | {
                      event: string | number;
                      player: string | number;
                  }
                | [event: string | number, player: string | number],
            options?: RouteQueryOptions,
        ): RouteDefinition<"patch">;
    };
    destroy: {
        (
            args:
                | {
                      event:
                          | number
                          | {
                                id: number;
                            };
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            },
                  ],
            options?: RouteQueryOptions,
        ): RouteDefinition<"delete">;
        definition: {
            methods: ["delete"];
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
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            },
                  ],
            options?: RouteQueryOptions,
        ): string;
        delete(
            args:
                | {
                      event:
                          | number
                          | {
                                id: number;
                            };
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            },
                  ],
            options?: RouteQueryOptions,
        ): RouteDefinition<"delete">;
    };
};
export default players;
//# sourceMappingURL=index.d.ts.map
