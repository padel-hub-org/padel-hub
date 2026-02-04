import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\EventGameController::index
* @see app/Http/Controllers/EventGameController.php:22
* @route '/events/{event}/games'
*/
export const index = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/events/{event}/games',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EventGameController::index
* @see app/Http/Controllers/EventGameController.php:22
* @route '/events/{event}/games'
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
* @see \App\Http\Controllers\EventGameController::index
* @see app/Http/Controllers/EventGameController.php:22
* @route '/events/{event}/games'
*/
index.get = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventGameController::index
* @see app/Http/Controllers/EventGameController.php:22
* @route '/events/{event}/games'
*/
index.head = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\EventGameController::store
* @see app/Http/Controllers/EventGameController.php:55
* @route '/events/{event}/games'
*/
export const store = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/events/{event}/games',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\EventGameController::store
* @see app/Http/Controllers/EventGameController.php:55
* @route '/events/{event}/games'
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
* @see \App\Http\Controllers\EventGameController::store
* @see app/Http/Controllers/EventGameController.php:55
* @route '/events/{event}/games'
*/
store.post = (args: { event: number | { id: number } } | [event: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\EventGameController::update
* @see app/Http/Controllers/EventGameController.php:95
* @route '/events/{event}/games/{game}'
*/
export const update = (args: { event: number | { id: number }, game: number | { id: number } } | [event: number | { id: number }, game: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/events/{event}/games/{game}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\EventGameController::update
* @see app/Http/Controllers/EventGameController.php:95
* @route '/events/{event}/games/{game}'
*/
update.url = (args: { event: number | { id: number }, game: number | { id: number } } | [event: number | { id: number }, game: number | { id: number } ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
            event: args[0],
            game: args[1],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        event: typeof args.event === 'object'
        ? args.event.id
        : args.event,
        game: typeof args.game === 'object'
        ? args.game.id
        : args.game,
    }

    return update.definition.url
            .replace('{event}', parsedArgs.event.toString())
            .replace('{game}', parsedArgs.game.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\EventGameController::update
* @see app/Http/Controllers/EventGameController.php:95
* @route '/events/{event}/games/{game}'
*/
update.put = (args: { event: number | { id: number }, game: number | { id: number } } | [event: number | { id: number }, game: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\EventGameController::update
* @see app/Http/Controllers/EventGameController.php:95
* @route '/events/{event}/games/{game}'
*/
update.patch = (args: { event: number | { id: number }, game: number | { id: number } } | [event: number | { id: number }, game: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

const EventGameController = { index, store, update }

export default EventGameController