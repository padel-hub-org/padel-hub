import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\EventController::disabled
* @see app/Http/Controllers/EventController.php:71
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
* @see app/Http/Controllers/EventController.php:71
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
* @see app/Http/Controllers/EventController.php:71
* @route '/events/{event}/players/{player}/disabled'
*/
disabled.put = (args: { event: number | { id: number }, player: number | { id: number } } | [event: number | { id: number }, player: number | { id: number } ], options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: disabled.url(args, options),
    method: 'put',
})

const players = {
    disabled: Object.assign(disabled, disabled),
}

export default players