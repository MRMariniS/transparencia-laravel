<?php

namespace App\Http\Controllers;

use App\Services\SubGrupoServices;
use Illuminate\Http\Request;

class SubGrupoController extends Controller
{
    function __construct(
        protected SubGrupoServices $subgrupo,
    ) {}

    function getSubGrupos($grupo)
    {
        $empresas = $this->subgrupo->getSubGrupos($grupo);
        return $empresas;
    }
}
