<?php

namespace App\Http\Controllers;

use App\Services\GrupoServices;
use App\Services\PublicacaoServices;
use App\Services\SeloServices;
use Inertia\Inertia;

class HomeController extends Controller
{
    function __construct(
        protected SeloServices $service,
        protected PublicacaoServices $publicacao,
        protected GrupoServices $grupo
    ) {}
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $selo = $this->service->getImagemSelo();
        
        return Inertia::render('Welcome');
    }

    public function homePublicacao(){
        $grupos_subgrupos = $this->grupo->getAllGruposAndSubGrupos();
        return Inertia::render('Publicacoes/Index', [
            'grupos_subgrupos' => $grupos_subgrupos
        ]);
    }
   
}
