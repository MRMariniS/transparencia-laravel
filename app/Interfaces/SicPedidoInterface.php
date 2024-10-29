<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface SicPedidoInterface{
    function getPedidoPorProtocolo($cpf, $protocolo);
    function getPedidos($tipo);
    function getDetalhesPedido($idpedido);
    function createPedido(Request $request);
}