<?php

namespace App\Http\Controllers;

use App\Services\SubGrupoServices;
use Illuminate\Http\Request;

class SubGrupoController extends Controller
{
    function __construct(
        protected SubGrupoServices $subgrupo,
    ) {
    }

    function getSubGrupos(Request $request)
    {
        $subgrupos = $this->subgrupo->getSubGrupos($request->grupos);
        return $subgrupos;
    }
}
