import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CourtController::store
* @see app/Http/Controllers/CourtController.php:26
* @route '/courts'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/courts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CourtController::store
* @see app/Http/Controllers/CourtController.php:26
* @route '/courts'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourtController::store
* @see app/Http/Controllers/CourtController.php:26
* @route '/courts'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CourtController::update
* @see app/Http/Controllers/CourtController.php:16
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
* @see app/Http/Controllers/CourtController.php:16
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
* @see app/Http/Controllers/CourtController.php:16
* @route '/courts/{court}'
*/
update.put = (args: { court: number | { id: number } } | [court: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\CourtController::update
* @see app/Http/Controllers/CourtController.php:16
* @route '/courts/{court}'
*/
update.patch = (args: { court: number | { id: number } } | [court: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\CourtController::destroy
* @see app/Http/Controllers/CourtController.php:36
* @route '/courts/{court}'
*/
export const destroy = (args: { court: number | { id: number } } | [court: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/courts/{court}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CourtController::destroy
* @see app/Http/Controllers/CourtController.php:36
* @route '/courts/{court}'
*/
destroy.url = (args: { court: number | { id: number } } | [court: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{court}', parsedArgs.court.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CourtController::destroy
* @see app/Http/Controllers/CourtController.php:36
* @route '/courts/{court}'
*/
destroy.delete = (args: { court: number | { id: number } } | [court: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const CourtController = { store, update, destroy }

export default CourtController