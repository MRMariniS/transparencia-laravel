<?php

namespace App\Http\Middleware;

use App\Services\EntityServices;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class EntityData
{
    function __construct(
        protected EntityServices $entity,
    ) {
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $entity = $this->entity->getEntity();

        Inertia::share('entidade', $entity);
        return $next($request);
    }
}
