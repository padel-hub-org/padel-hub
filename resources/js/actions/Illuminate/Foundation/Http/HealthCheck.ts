import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Illuminate\Foundation\Http\HealthCheck::__invoke
* @see vendor/laravel/framework/src/Illuminate/Foundation/Http/HealthCheck.php:18
* @route '/up'
*/
const HealthCheck = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: HealthCheck.url(options),
    method: 'get',
})

HealthCheck.definition = {
    methods: ["get","head"],
    url: '/up',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Illuminate\Foundation\Http\HealthCheck::__invoke
* @see vendor/laravel/framework/src/Illuminate/Foundation/Http/HealthCheck.php:18
* @route '/up'
*/
HealthCheck.url = (options?: RouteQueryOptions) => {
    return HealthCheck.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Foundation\Http\HealthCheck::__invoke
* @see vendor/laravel/framework/src/Illuminate/Foundation/Http/HealthCheck.php:18
* @route '/up'
*/
HealthCheck.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: HealthCheck.url(options),
    method: 'get',
})

/**
* @see \Illuminate\Foundation\Http\HealthCheck::__invoke
* @see vendor/laravel/framework/src/Illuminate/Foundation/Http/HealthCheck.php:18
* @route '/up'
*/
HealthCheck.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: HealthCheck.url(options),
    method: 'head',
})

export default HealthCheck