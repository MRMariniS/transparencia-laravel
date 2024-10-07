<?php

namespace App\Interfaces;

interface SicPedidoInterface{
    function getPedidoPorProtocolo($cpf, $protocolo);
    function getPedidos($tipo);
    function getDetalhesPedido($idpedido);
}