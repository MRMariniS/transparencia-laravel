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
            ->where(function ($query) {
                Helper::filterQueryUg($query);
            })
            ->select(['PROTOCOLO', 'OBJETIVO', 'PEDIDO', 'DTHRPEDIDO', 'STATUS'])
            ->paginate(10);


        $pedido = ConvertingData::convertingData(
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

    function getDetalhesPedidoColetivo($idpedido)
    {
        $pedido = SicPedido::with('movimento:ID_PEDIDO,SEQUENCIA,DTHRMOVTO,RESPOSTA,STATUS,DTHRSTATUS,ID_PUBLICACAO')->where('COLETIVO', 'N')
            ->where(function ($query) {
                Helper::filterQueryUg($query);
            })
            ->where('PROTOCOLO', $idpedido)
            ->get();

        $pedido = ConvertingData::convertingData(
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
            $item->movimento = ConvertingData::convertingData(
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
}
