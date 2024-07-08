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
}
