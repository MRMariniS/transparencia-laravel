<?php

namespace App\Repositories;

use App\Interfaces\SicPedidoInterface;
use App\Models\SicPedido;
use App\Services\ConvertingData;

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
}
