<?php

namespace App\Repositories;

use App\Helpers\Helper;
use App\Interfaces\EstruturaInterface;
use App\Models\Estrutura;

class EstruturaEloquentORM implements EstruturaInterface
{

    private $campoEstrutura = [
        'CODIGO',
        'DESCRICAO',
        'TIPO',
        'ATRIBUICOES',
        'ENDERECO',
        'HORARIO',
        'TELEFONES',
        'SITE',
        'EMAIL',
        'RESPONSAVEL',
        'CARGO',
        'UG'
    ];

    private $camposConvertingData = [
        'DESCRICAO',
        'ATRIBUICOES',
        'ENDERECO',
        'HORARIO',
        'EMAIL',
        'RESPONSAVEL',
        'CARGO'
    ];

    function getEstrutura($tipo = "todas")
    {
        $estrutura = Estrutura::with('tipo_estrutura',)
            ->where(function ($query) {
                Helper::filterQueryUg($query);
            })
            ->where('PUBLICADO', 'S')
            ->where(function($query) use ($tipo){
                if($tipo != "todas"){
                    $query->where('TIPO', $tipo);
                }
            })
            ->get($this->campoEstrutura);
       
        $estrutura = Helper::convertingData($estrutura, $this->camposConvertingData);

        foreach ($estrutura as $item) {
            $item->tipo_estrutura = Helper::convertingDataHasOne($item->tipo_estrutura, ['DESCRICAO']);
        }

        return $estrutura;
    }
}
