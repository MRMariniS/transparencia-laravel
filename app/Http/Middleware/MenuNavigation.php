<?php

namespace App\Http\Middleware;

use App\Services\UrlServices;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class MenuNavigation
{
    function __construct(
        protected UrlServices $url,
    ) {
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $menus = array(
            'menuLateral' => $this->url->menuLateral(),
            'menuSuperior' => $this->url->menuTopBar(),
            'menuSocial' => $this->url->menuSocial(),
            'menuHome' => $this->url->menuHome()
        );

        Inertia::share('menus', $menus);

        return $next($request);
    }
}
