<?php

namespace App\Http\Controllers;

use App\Services\TabEmpresaServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TabEmpresaController extends Controller
{
    function __construct(
        protected TabEmpresaServices $empresa,
    ) {}

    function getEmpresaReturnJson($exercicio)
    {
        $empresas = $this->empresa->getEmpresas($exercicio);
        return Inertia::render('Aplicacoes/Empenhos/Index', [
            'dataSelectEmpresa' => $empresas
        ]);
    }
}
