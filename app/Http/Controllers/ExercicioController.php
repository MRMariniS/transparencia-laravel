<?php

namespace App\Http\Controllers;

use App\Models\Exercicio;
use App\Services\TabEmpresaServices;
use Illuminate\Http\Request;

class ExercicioController extends Controller
{
    function __construct(
        protected TabEmpresaServices $empresa,
    ) {
    }

    function index($exercicio)
    {
        $empresas = $this->empresa->getEmpresas($exercicio);
        return $empresas;
    }
}
