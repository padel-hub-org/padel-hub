import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\EventController::disabled
* @see app/Http/Controllers/EventController.php:70
* @route '/events/{event}/players/{player}/disabled'
*/
export const disabled = (args: { event: number | { id: number }, player: number | { id: number } } | [event: number | { id: number }, player: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: disabled.url(args, options),
    method: 'put',
})

disabled.definition = {
    methods: ["put"],
    url: '/events/{event}/players/{player}/disabled',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\EventController::disabled
* @see app/Http/Controllers/EventController.php:70
* @route '/events/{event}/players/{player}/disabled'
*/
disabled.url = (args: { event: number | { id: number }, player: number | { id: number } } | [event: number | { id: number }, player: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            event: args[0],
            player: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        event: typeof args.event === 'object'
        ? args.event.id
        : args.event,
        player: typeof args.player === 'object'
        ? args.player.id
        : args.player,
    }

    return disabled.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventController::disabled
* @see app/Http/Controllers/EventController.php:70
* @route '/events/{event}/players/{player}/disabled'
*/
disabled.put = (args: { event: number | { id: number }, player: number | { id: number } } | [event: number | { id: number }, player: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: disabled.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\EventPlayerController::index
* @see app/Http/Controllers/EventPlayerController.php:18
* @route '/events/{event}/players'
*/
export const index = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/events/{event}/players',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EventPlayerController::index
* @see app/Http/Controllers/EventPlayerController.php:18
* @route '/events/{event}/players'
*/
index.url = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { event: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { event: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            event: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        event: typeof args.event === 'object'
        ? args.event.id
        : args.event,
    }

    return index.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventPlayerController::index
* @see app/Http/Controllers/EventPlayerController.php:18
* @route '/events/{event}/players'
*/
index.get = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventPlayerController::index
* @see app/Http/Controllers/EventPlayerController.php:18
* @route '/events/{event}/players'
*/
index.head = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EventPlayerController::create
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/create'
*/
export const create = (args: { event: string | number } | [event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/events/{event}/players/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EventPlayerController::create
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/create'
*/
create.url = (args: { event: string | number } | [event: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { event: args }
    }

    if (Array.isArray(args)) {
        args = {
            event: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        event: args.event,
    }

    return create.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventPlayerController::create
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/create'
*/
create.get = (args: { event: string | number } | [event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventPlayerController::create
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/create'
*/
create.head = (args: { event: string | number } | [event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EventPlayerController::store
* @see app/Http/Controllers/EventPlayerController.php:35
* @route '/events/{event}/players'
*/
export const store = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/events/{event}/players',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EventPlayerController::store
* @see app/Http/Controllers/EventPlayerController.php:35
* @route '/events/{event}/players'
*/
store.url = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { event: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { event: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            event: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        event: typeof args.event === 'object'
        ? args.event.id
        : args.event,
    }

    return store.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventPlayerController::store
* @see app/Http/Controllers/EventPlayerController.php:35
* @route '/events/{event}/players'
*/
store.post = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\EventPlayerController::show
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}'
*/
export const show = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/events/{event}/players/{player}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EventPlayerController::show
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}'
*/
show.url = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            event: args[0],
            player: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        event: args.event,
        player: args.player,
    }

    return show.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventPlayerController::show
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}'
*/
show.get = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventPlayerController::show
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}'
*/
show.head = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EventPlayerController::edit
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}/edit'
*/
export const edit = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/events/{event}/players/{player}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EventPlayerController::edit
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}/edit'
*/
edit.url = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            event: args[0],
            player: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        event: args.event,
        player: args.player,
    }

    return edit.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventPlayerController::edit
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}/edit'
*/
edit.get = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventPlayerController::edit
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}/edit'
*/
edit.head = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EventPlayerController::update
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}'
*/
export const update = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/events/{event}/players/{player}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\EventPlayerController::update
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}'
*/
update.url = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            event: args[0],
            player: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        event: args.event,
        player: args.player,
    }

    return update.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventPlayerController::update
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}'
*/
update.put = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\EventPlayerController::update
* @see app/Http/Controllers/EventPlayerController.php:0
* @route '/events/{event}/players/{player}'
*/
update.patch = (args: { event: string | number, player: string | number } | [event: string | number, player: string | number ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\EventPlayerController::destroy
* @see app/Http/Controllers/EventPlayerController.php:51
* @route '/events/{event}/players/{player}'
*/
export const destroy = (args: { event: number | { id: number }, player: number | { id: number } } | [event: number | { id: number }, player: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/events/{event}/players/{player}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\EventPlayerController::destroy
* @see app/Http/Controllers/EventPlayerController.php:51
* @route '/events/{event}/players/{player}'
*/
destroy.url = (args: { event: number | { id: number }, player: number | { id: number } } | [event: number | { id: number }, player: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            event: args[0],
            player: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        event: typeof args.event === 'object'
        ? args.event.id
        : args.event,
        player: typeof args.player === 'object'
        ? args.player.id
        : args.player,
    }

    return destroy.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventPlayerController::destroy
* @see app/Http/Controllers/EventPlayerController.php:51
* @route '/events/{event}/players/{player}'
*/
destroy.delete = (args: { event: number | { id: number }, player: number | { id: number } } | [event: number | { id: number }, player: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const players = {
    disabled: Object.assign(disabled, disabled),
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default players