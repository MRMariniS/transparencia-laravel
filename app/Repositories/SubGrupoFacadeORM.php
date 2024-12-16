<?php

namespace App\Repositories;

use App\Helpers\Helper;
use App\Interfaces\SubGrupoInterface;
use App\Models\SubGrupo;

class SubGrupoFacadeORM implements SubGrupoInterface
{
    function getSubgrupos($grupo)
    {
        $subgrupos = SubGrupo::whereIn('GRUPO', $grupo)->where('PUBLICADO', 'S')->get(['SUBGRUPO', 'GRUPO', 'DESCRICAO', 'DEFINICAO']);
        $subgrupos = Helper::convertingData($subgrupos, ['DESCRICAO', 'DEFINICAO']);
        return $subgrupos;
    }
}
