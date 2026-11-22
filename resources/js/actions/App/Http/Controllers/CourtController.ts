import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourtController::update
* @see app/Http/Controllers/CourtController.php:13
* @route '/courts/{court}'
*/
export const update = (args: { court: number | { id: number } } | [court: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/courts/{court}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\CourtController::update
* @see app/Http/Controllers/CourtController.php:13
* @route '/courts/{court}'
*/
update.url = (args: { court: number | { id: number } } | [court: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { court: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { court: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            court: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        court: typeof args.court === 'object'
        ? args.court.id
        : args.court,
    }

    return update.definition.url
            .replace('{court}', parsedArgs.court.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourtController::update
* @see app/Http/Controllers/CourtController.php:13
* @route '/courts/{court}'
*/
update.put = (args: { court: number | { id: number } } | [court: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\CourtController::update
* @see app/Http/Controllers/CourtController.php:13
* @route '/courts/{court}'
*/
update.patch = (args: { court: number | { id: number } } | [court: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

const CourtController = { update }

export default CourtController