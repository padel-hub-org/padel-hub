import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PlayerController::index
* @see app/Http/Controllers/PlayerController.php:18
* @route '/players'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/players',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlayerController::index
* @see app/Http/Controllers/PlayerController.php:18
* @route '/players'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlayerController::index
* @see app/Http/Controllers/PlayerController.php:18
* @route '/players'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlayerController::index
* @see app/Http/Controllers/PlayerController.php:18
* @route '/players'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlayerController::create
* @see app/Http/Controllers/PlayerController.php:47
* @route '/players/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/players/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlayerController::create
* @see app/Http/Controllers/PlayerController.php:47
* @route '/players/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlayerController::create
* @see app/Http/Controllers/PlayerController.php:47
* @route '/players/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlayerController::create
* @see app/Http/Controllers/PlayerController.php:47
* @route '/players/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlayerController::store
* @see app/Http/Controllers/PlayerController.php:55
* @route '/players'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/players',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PlayerController::store
* @see app/Http/Controllers/PlayerController.php:55
* @route '/players'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlayerController::store
* @see app/Http/Controllers/PlayerController.php:55
* @route '/players'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PlayerController::show
* @see app/Http/Controllers/PlayerController.php:39
* @route '/players/{player}'
*/
export const show = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/players/{player}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlayerController::show
* @see app/Http/Controllers/PlayerController.php:39
* @route '/players/{player}'
*/
show.url = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { player: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { player: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            player: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        player: typeof args.player === 'object'
        ? args.player.id
        : args.player,
    }

    return show.definition.url
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlayerController::show
* @see app/Http/Controllers/PlayerController.php:39
* @route '/players/{player}'
*/
show.get = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlayerController::show
* @see app/Http/Controllers/PlayerController.php:39
* @route '/players/{player}'
*/
show.head = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlayerController::edit
* @see app/Http/Controllers/PlayerController.php:67
* @route '/players/{player}/edit'
*/
export const edit = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/players/{player}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PlayerController::edit
* @see app/Http/Controllers/PlayerController.php:67
* @route '/players/{player}/edit'
*/
edit.url = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { player: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { player: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            player: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        player: typeof args.player === 'object'
        ? args.player.id
        : args.player,
    }

    return edit.definition.url
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlayerController::edit
* @see app/Http/Controllers/PlayerController.php:67
* @route '/players/{player}/edit'
*/
edit.get = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PlayerController::edit
* @see app/Http/Controllers/PlayerController.php:67
* @route '/players/{player}/edit'
*/
edit.head = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PlayerController::update
* @see app/Http/Controllers/PlayerController.php:75
* @route '/players/{player}'
*/
export const update = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/players/{player}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PlayerController::update
* @see app/Http/Controllers/PlayerController.php:75
* @route '/players/{player}'
*/
update.url = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { player: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { player: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            player: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        player: typeof args.player === 'object'
        ? args.player.id
        : args.player,
    }

    return update.definition.url
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlayerController::update
* @see app/Http/Controllers/PlayerController.php:75
* @route '/players/{player}'
*/
update.put = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PlayerController::update
* @see app/Http/Controllers/PlayerController.php:75
* @route '/players/{player}'
*/
update.patch = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PlayerController::destroy
* @see app/Http/Controllers/PlayerController.php:87
* @route '/players/{player}'
*/
export const destroy = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/players/{player}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PlayerController::destroy
* @see app/Http/Controllers/PlayerController.php:87
* @route '/players/{player}'
*/
destroy.url = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { player: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { player: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            player: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        player: typeof args.player === 'object'
        ? args.player.id
        : args.player,
    }

    return destroy.definition.url
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PlayerController::destroy
* @see app/Http/Controllers/PlayerController.php:87
* @route '/players/{player}'
*/
destroy.delete = (args: { player: string | number | { id: string | number } } | [player: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const players = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default players