<?php

namespace App\Services;

use App\Interfaces\SicPedidoInterface;

final class SicPedidoServices
{
    function __construct(
        protected SicPedidoInterface $sic,
    ) {
    }

    function getPedidoPorProtocolo($cpf, $protocolo, $tipo)
    {
        $pedido = $this->sic->getPedidoPorProtocolo($cpf, $protocolo, $tipo);
        return $pedido;
    }

    function getPedidosColetivo(){
        $pedido = $this->sic->getPedidosColetivo();
        return $pedido;
    }

    function getDetalhesPedidoColetivo($idpedido){
        $pedido = $this->sic->getDetalhesPedidoColetivo($idpedido);
        return $pedido;
    }
}
