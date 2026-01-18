import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\EventLeaderboardController::index
* @see app/Http/Controllers/EventLeaderboardController.php:16
* @route '/events/{event}/leaderboard'
*/
export const index = (args: { event: string | number | { id: string | number } } | [event: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/events/{event}/leaderboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\EventLeaderboardController::index
* @see app/Http/Controllers/EventLeaderboardController.php:16
* @route '/events/{event}/leaderboard'
*/
index.url = (args: { event: string | number | { id: string | number } } | [event: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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
* @see \App\Http\Controllers\EventLeaderboardController::index
* @see app/Http/Controllers/EventLeaderboardController.php:16
* @route '/events/{event}/leaderboard'
*/
index.get = (args: { event: string | number | { id: string | number } } | [event: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\EventLeaderboardController::index
* @see app/Http/Controllers/EventLeaderboardController.php:16
* @route '/events/{event}/leaderboard'
*/
index.head = (args: { event: string | number | { id: string | number } } | [event: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

const leaderboard = {
    index: Object.assign(index, index),
}

export default leaderboard