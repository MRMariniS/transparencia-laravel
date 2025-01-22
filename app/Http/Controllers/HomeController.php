<?php

namespace App\Http\Controllers;

use App\Services\EntityServices;
use App\Services\EstruturaServices;
use App\Services\EstruturaTipoServices;
use App\Services\GrupoServices;
use App\Services\PublicacaoServices;
use App\Services\SeloServices;
use Diglactic\Breadcrumbs\Breadcrumbs;
use Inertia\Inertia;

class HomeController extends Controller
{
    function __construct(
        protected SeloServices $service,
        protected PublicacaoServices $publicacao,
        protected GrupoServices $grupo,
        protected EstruturaTipoServices $estrutura,
        protected EntityServices $entity
    ) {}
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $selo = $this->service->getImagemSelo();

        return Inertia::render('Welcome', 
        ['breadcrumbs' => Breadcrumbs::generate('home')]
    );
    }

    public function homePublicacao()
    {
        $grupos_subgrupos = $this->grupo->getAllGruposAndSubGrupos();
        return Inertia::render('Publicacoes/Index', [
            'grupos_subgrupos' => $grupos_subgrupos
        ]);
    }

    public function homeEstrutura()
    {
        $tiposEstrutura = $this->estrutura->getEstruturaTipo();
        return Inertia::render('Informacoes/Estrutura/Index', [
            'tiposEstrutura' => $tiposEstrutura,
            'breadcrumbs' => Breadcrumbs::generate('estrutura')
        ]);
    }

    public function homeValores()
    {
        $valores = $this->entity->getValores();
        return Inertia::render('Informacoes/Valores/Index', [
            'valores' => $valores
        ]);
    }
}
