<?php

namespace App\Services;

use App\Interfaces\SicPedidoInterface;

final class SicPedidoServices
{
    function __construct(
        protected SicPedidoInterface $sic,
    ) {
    }

    function getPedidoPorProtocolo($cpf, $protocolo)
    {
        $pedido = $this->sic->getPedidoPorProtocolo($cpf, $protocolo);
        return $pedido;
    }

    function getPedidos($tipo){
        $pedido = $this->sic->getPedidos($tipo);
        return $pedido;
    }

    function getDetalhesPedido($protocolo){
        $pedido = $this->sic->getDetalhesPedido($protocolo);
        return $pedido;
    }
}
