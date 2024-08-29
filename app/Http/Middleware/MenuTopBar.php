<?php

namespace App\Http\Middleware;

use App\Models\Exercicio;
use App\Models\Url;
use App\Helpers\ConvertingData;
use App\Services\DefinedUg;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class MenuTopBar
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $menutopbar = Url::where('TIPOMENU', 'SUPERIOR')->get(['CODIGO','APRESENTACAO', 'URL']);

        $menutopbar = ConvertingData::convertingData($menutopbar,
            [
                'APRESENTACAO',
                'URL'
            ]
        );

        Inertia::share('menutopbar', $menutopbar);

        return $next($request);
    }
}
