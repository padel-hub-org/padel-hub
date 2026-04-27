import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../../wayfinder";
/**
 * @see \App\Http\Controllers\PlayerController::index
 * @see app/Http/Controllers/PlayerController.php:18
 * @route '/players'
 */
export declare const index: {
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
 * @see \App\Http\Controllers\PlayerController::create
 * @see app/Http/Controllers/PlayerController.php:47
 * @route '/players/create'
 */
export declare const create: {
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
 * @see \App\Http\Controllers\PlayerController::store
 * @see app/Http/Controllers/PlayerController.php:55
 * @route '/players'
 */
export declare const store: {
    (options?: RouteQueryOptions): RouteDefinition<"post">;
    definition: {
        methods: ["post"];
        url: string;
    };
    url(options?: RouteQueryOptions): string;
    post(options?: RouteQueryOptions): RouteDefinition<"post">;
};
/**
 * @see \App\Http\Controllers\PlayerController::show
 * @see app/Http/Controllers/PlayerController.php:39
 * @route '/players/{player}'
 */
export declare const show: {
    (
        args:
            | {
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
 * @see \App\Http\Controllers\PlayerController::edit
 * @see app/Http/Controllers/PlayerController.php:67
 * @route '/players/{player}/edit'
 */
export declare const edit: {
    (
        args:
            | {
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
 * @see \App\Http\Controllers\PlayerController::update
 * @see app/Http/Controllers/PlayerController.php:75
 * @route '/players/{player}'
 */
export declare const update: {
    (
        args:
            | {
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
    ): RouteDefinition<"put">;
    definition: {
        methods: ["put", "patch"];
        url: string;
    };
    url(
        args:
            | {
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
    put(
        args:
            | {
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
    ): RouteDefinition<"put">;
    patch(
        args:
            | {
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
    ): RouteDefinition<"patch">;
};
/**
 * @see \App\Http\Controllers\PlayerController::destroy
 * @see app/Http/Controllers/PlayerController.php:87
 * @route '/players/{player}'
 */
export declare const destroy: {
    (
        args:
            | {
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
    ): RouteDefinition<"delete">;
    definition: {
        methods: ["delete"];
        url: string;
    };
    url(
        args:
            | {
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
    delete(
        args:
            | {
                  player:
                      | number
                      | {
                            id: number;
                        };
              }
            | [
                  player:
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
    ): RouteDefinition<"delete">;
};
declare const PlayerController: {
    index: {
        (options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        get(options?: RouteQueryOptions): RouteDefinition<"get">;
        head(options?: RouteQueryOptions): RouteDefinition<"head">;
    };
    create: {
        (options?: RouteQueryOptions): RouteDefinition<"get">;
        definition: {
            methods: ["get", "head"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        get(options?: RouteQueryOptions): RouteDefinition<"get">;
        head(options?: RouteQueryOptions): RouteDefinition<"head">;
    };
    store: {
        (options?: RouteQueryOptions): RouteDefinition<"post">;
        definition: {
            methods: ["post"];
            url: string;
        };
        url(options?: RouteQueryOptions): string;
        post(options?: RouteQueryOptions): RouteDefinition<"post">;
    };
    show: {
        (
            args:
                | {
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
    edit: {
        (
            args:
                | {
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
    update: {
        (
            args:
                | {
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
        ): RouteDefinition<"put">;
        definition: {
            methods: ["put", "patch"];
            url: string;
        };
        url(
            args:
                | {
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
        put(
            args:
                | {
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
        ): RouteDefinition<"put">;
        patch(
            args:
                | {
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
        ): RouteDefinition<"patch">;
    };
    destroy: {
        (
            args:
                | {
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
        ): RouteDefinition<"delete">;
        definition: {
            methods: ["delete"];
            url: string;
        };
        url(
            args:
                | {
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
        delete(
            args:
                | {
                      player:
                          | number
                          | {
                                id: number;
                            };
                  }
                | [
                      player:
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
        ): RouteDefinition<"delete">;
    };
};
export default PlayerController;
//# sourceMappingURL=PlayerController.d.ts.map
