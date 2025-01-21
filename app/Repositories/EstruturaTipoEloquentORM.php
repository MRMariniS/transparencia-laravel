<?php

namespace App\Repositories;

use App\Helpers\Helper;
use App\Interfaces\EstruturaTipoInterface;
use App\Models\EstruturaTipo;

class EstruturaTipoEloquentORM implements EstruturaTipoInterface
{


    function getEstruturaTipo()
    {
        $tiposEstrutura =  EstruturaTipo::with('estruturas')
        ->whereHas('estruturas', function ($query) {
            Helper::filterQueryUg($query, null, 'RPPS');
        })
        ->get(['ID', 'DESCRICAO']);
        $tiposEstrutura = Helper::convertingData($tiposEstrutura, ['DESCRICAO']);

        foreach ($tiposEstrutura as $item) {
            $item->estruturas = Helper::convertingData($item->estruturas, ['DESCRICAO']);
        }

        return $tiposEstrutura;
    }
}
