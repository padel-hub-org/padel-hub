import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Fruitcake\LaravelDebugbar\Controllers\CacheController::deleteMethod
* @see vendor/barryvdh/laravel-debugbar/src/Controllers/CacheController.php:16
* @route '/_debugbar/cache'
*/
export const deleteMethod = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/_debugbar/cache',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Fruitcake\LaravelDebugbar\Controllers\CacheController::deleteMethod
* @see vendor/barryvdh/laravel-debugbar/src/Controllers/CacheController.php:16
* @route '/_debugbar/cache'
*/
deleteMethod.url = (options?: RouteQueryOptions) => {
    return deleteMethod.definition.url + queryParams(options)
}

/**
* @see \Fruitcake\LaravelDebugbar\Controllers\CacheController::deleteMethod
* @see vendor/barryvdh/laravel-debugbar/src/Controllers/CacheController.php:16
* @route '/_debugbar/cache'
*/
deleteMethod.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(options),
    method: 'delete',
})

const CacheController = { deleteMethod, delete: deleteMethod }

export default CacheController