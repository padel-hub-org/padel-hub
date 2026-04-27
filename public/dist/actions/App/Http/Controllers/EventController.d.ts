import {
    type RouteQueryOptions,
    type RouteDefinition,
} from "./../../../../wayfinder";
/**
 * @see \App\Http\Controllers\EventController::index
 * @see app/Http/Controllers/EventController.php:21
 * @route '/events'
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
 * @see \App\Http\Controllers\EventController::create
 * @see app/Http/Controllers/EventController.php:36
 * @route '/events/create'
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
 * @see \App\Http\Controllers\EventController::store
 * @see app/Http/Controllers/EventController.php:44
 * @route '/events'
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
 * @see \App\Http\Controllers\EventController::show
 * @see app/Http/Controllers/EventController.php:63
 * @route '/events/{event}'
 */
export declare const show: {
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
 * @see \App\Http\Controllers\EventController::edit
 * @see app/Http/Controllers/EventController.php:87
 * @route '/events/{event}/edit'
 */
export declare const edit: {
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
 * @see \App\Http\Controllers\EventController::update
 * @see app/Http/Controllers/EventController.php:95
 * @route '/events/{event}'
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
    put(
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
    ): RouteDefinition<"put">;
    patch(
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
    ): RouteDefinition<"patch">;
};
/**
 * @see \App\Http\Controllers\EventController::destroy
 * @see app/Http/Controllers/EventController.php:105
 * @route '/events/{event}'
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
    delete(
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
    ): RouteDefinition<"delete">;
};
/**
 * @see \App\Http\Controllers\EventController::setDisabled
 * @see app/Http/Controllers/EventController.php:71
 * @route '/events/{event}/players/{player}/disabled'
 */
export declare const setDisabled: {
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
 * @see \App\Http\Controllers\EventController::endEvent
 * @see app/Http/Controllers/EventController.php:117
 * @route '/events/{event}/end'
 */
export declare const endEvent: {
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
    put(
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
    ): RouteDefinition<"put">;
};
declare const EventController: {
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
    edit: {
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
    update: {
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
        put(
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
        ): RouteDefinition<"put">;
        patch(
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
        delete(
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
        ): RouteDefinition<"delete">;
    };
    setDisabled: {
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
    endEvent: {
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
        put(
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
        ): RouteDefinition<"put">;
    };
};
export default EventController;
//# sourceMappingURL=EventController.d.ts.map
