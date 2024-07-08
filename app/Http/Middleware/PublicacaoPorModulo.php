<?php

namespace App\Http\Middleware;

use App\Services\Publicacao;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class PublicacaoPorModulo
{
    function __construct(
        protected Publicacao $services,
    ) {
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next,  int $grupo = null, string $subgrupo = null): Response
    {

        $publicacoes_fixas = [];
        $cdmodulo = $request->cdmodulo;

        if ($grupo != null && $subgrupo != null) {
            $subgrupo = explode("|", $subgrupo);
            $publicacoes_fixas = $this->services->getPublicacaoPorModulo('-1', $grupo, $subgrupo);
        }

        $publicacoes_pormodulo = [];//$this->services->getPublicacaoPorModulo($cdmodulo);

        Inertia::share([
            'publicacoes_pormodulo' => $publicacoes_pormodulo,
            'publicacoes_fixas' => $publicacoes_fixas
        ]);

        return $next($request);
    }
}
