<?php

namespace App\Repositories;

use App\Interfaces\SicPedidoInterface;
use App\Models\SicPedido;
use App\Helpers\ConvertingData;
use App\Helpers\Helper;

class SicPedidoEloquentORM implements SicPedidoInterface
{
    function getPedidoPorProtocolo($cpf,  $protocolo, $tipo)
    {
        $pedido = SicPedido::where('CPF', $cpf)->where('PROTOCOLO', $protocolo)
        ->where('TIPO', $tipo)->get();

        $pedido = ConvertingData::convertingData($pedido, [
            'NOME',
            'OBJETIVO',
            'PEDIDO',
            'PRIORIDADE',
            'STATUS'
        ]);

        return $pedido;
    }

    function getPedidosColetivo()
    {
        $pedido = SicPedido::where('COLETIVO', 'N')
        ->where(function($query){
            Helper::filterQueryUg($query);
        })
        ->select(['OBJETIVO', 'PEDIDO', 'STATUS'])
        ->paginate(10);
        

        $pedido = ConvertingData::convertingData($pedido, [
            'ID',
            'OBJETIVO',
            'PEDIDO',
            'STATUS'
        ]);

        return $pedido;
    }
}
