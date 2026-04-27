declare const Controllers: {
    HomeController: {
        index: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
    };
    AuthController: {
        index: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
        redirectToGoogle: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
        handleGoogleCallback: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
        logout: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"post">;
            definition: {
                methods: ["post"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            post(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"post">;
        };
    };
    PlayerController: {
        index: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
        create: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
        store: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"post">;
            definition: {
                methods: ["post"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            post(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"post">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"patch">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"delete">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"delete">;
        };
    };
    EventController: {
        index: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
        create: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            definition: {
                methods: ["get", "head"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
        store: {
            (
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"post">;
            definition: {
                methods: ["post"];
                url: string;
            };
            url(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            post(
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"post">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"patch">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"delete">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"delete">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
        };
    };
    EventPlayerController: {
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                args:
                    | {
                          event: string | number;
                      }
                    | [event: string | number]
                    | string
                    | number,
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                args:
                    | {
                          event: string | number;
                      }
                    | [event: string | number]
                    | string
                    | number,
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"post">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"post">;
        };
        show: {
            (
                args:
                    | {
                          event: string | number;
                          player: string | number;
                      }
                    | [event: string | number, player: string | number],
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                args:
                    | {
                          event: string | number;
                          player: string | number;
                      }
                    | [event: string | number, player: string | number],
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                args:
                    | {
                          event: string | number;
                          player: string | number;
                      }
                    | [event: string | number, player: string | number],
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
        edit: {
            (
                args:
                    | {
                          event: string | number;
                          player: string | number;
                      }
                    | [event: string | number, player: string | number],
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            get(
                args:
                    | {
                          event: string | number;
                          player: string | number;
                      }
                    | [event: string | number, player: string | number],
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
            head(
                args:
                    | {
                          event: string | number;
                          player: string | number;
                      }
                    | [event: string | number, player: string | number],
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
        update: {
            (
                args:
                    | {
                          event: string | number;
                          player: string | number;
                      }
                    | [event: string | number, player: string | number],
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): string;
            put(
                args:
                    | {
                          event: string | number;
                          player: string | number;
                      }
                    | [event: string | number, player: string | number],
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
            patch(
                args:
                    | {
                          event: string | number;
                          player: string | number;
                      }
                    | [event: string | number, player: string | number],
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"patch">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"delete">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"delete">;
        };
    };
    EventSettingController: {
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
    };
    EventGameController: {
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"post">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"post">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"put">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"patch">;
        };
    };
    EventLeaderboardController: {
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"get">;
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
                options?: import("../../../../wayfinder").RouteQueryOptions,
            ): import("../../../../wayfinder").RouteDefinition<"head">;
        };
    };
};
export default Controllers;
//# sourceMappingURL=index.d.ts.map
