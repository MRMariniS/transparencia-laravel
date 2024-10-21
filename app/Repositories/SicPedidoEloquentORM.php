<?php

namespace App\Repositories;

use App\Interfaces\SicPedidoInterface;
use App\Models\SicPedido;
use App\Helpers\Helper;

class SicPedidoEloquentORM implements SicPedidoInterface
{
    function getPedidoPorProtocolo($cpf,  $protocolo)
    {
        $pedido = SicPedido::where('CPF', $cpf)->where('PROTOCOLO', $protocolo)
            ->select(['PROTOCOLO', 'OBJETIVO', 'PEDIDO', 'DTHRPEDIDO', 'STATUS'])
            ->paginate(10);

        $pedido = Helper::convertingData(
            $pedido,
            [
                'OBJETIVO',
                'PEDIDO',
                'STATUS'
            ],
            [
                'DTHRPEDIDO'
            ]
        );
        return $pedido;
    }

    function getPedidos($tipo)
    {
        $pedido = SicPedido::where(function ($query) use ($tipo) {
            Helper::filterPedido($query, $tipo);
        })
            ->where(function ($query) {
                Helper::filterQueryUg($query);
            })
            ->select(['PROTOCOLO', 'OBJETIVO', 'PEDIDO', 'DTHRPEDIDO', 'STATUS'])
            ->paginate(10);


        $pedido = Helper::convertingData(
            $pedido,
            [
                'OBJETIVO',
                'PEDIDO',
                'STATUS'
            ],
            [
                'DTHRPEDIDO'
            ]
        );
        return $pedido;
    }

    function getDetalhesPedido($protocolo)
    {
        $pedido = SicPedido::with(['movimento' => function ($query) {
            $query->select(['ID_PEDIDO', 'SEQUENCIA', 'STATUS', 'DTHRSTATUS', 'RESPOSTA', 'DTHRMOVTO', 'ID_PUBLICACAO'])
                ->paginate(10);
        }])->where('PROTOCOLO', $protocolo)
            ->get(['ID', 'PROTOCOLO', 'DTHRPEDIDO', 'OBJETIVO', 'PEDIDO', 'PRIORIDADE', 'STATUS', 'DTHRSTATUS', 'COLETIVO']);


        $pedido = Helper::convertingData(
            $pedido,
            [
                'OBJETIVO',
                'PEDIDO',
                'STATUS'

            ],
            [
                'DTHRPEDIDO',
                'DTHRSTATUS'
            ]
        );

        foreach ($pedido as $item) {
            $item->movimento = Helper::convertingData(
                $item->movimento,
                ['RESPOSTA'],
                [
                    'DTHRMOVTO',
                    'DTHRSTATUS'
                ]
            );
        }

        return $pedido;
    }

    // private function verificaColetivo($query, $protocolo){
    //     $pedido = SicPedido::where('PROTOCOLO', $protocolo)
    // }
}
