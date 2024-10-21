<?php

namespace App\Http\Middleware;

use App\Services\EstruturaServices;
use App\Services\PublicacaoServices;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Middleware;
use Symfony\Component\HttpFoundation\Response;

class CanaisDeInformacao
{
    function __construct(
        protected PublicacaoServices $publicacao,
        protected EstruturaServices $estrutura,
    ) {
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $tipo): Response
    {
        //$tipo = "lgpd";
        if($tipo == "esic"){
            $publicacoes = $this->publicacao->getPublicacaoPorGrupoOuSubgrupo(98,[2]);
            $estrutura = $this->estrutura->getEstrutura(10);
        }else if($tipo == "eouv"){
            $publicacoes = $this->publicacao->getPublicacaoPorGrupoOuSubgrupo(98, [4]);
            $estrutura = $this->estrutura->getEstrutura(14);
        }else if($tipo == "lgpd"){
            $publicacoes = $this->publicacao->getPublicacaoPorGrupoOuSubgrupo(98, [6,7]);
            $estrutura = $this->estrutura->getEstrutura(16);
        }

        $informacoes = [
            'publicacao' => $publicacoes,
            'estrutura' => $estrutura
        ];

        Inertia::share([
            'publicacoes' => $publicacoes,
            'estruturas' => $estrutura
        ]);

        return $next($request);

       
    }
}
