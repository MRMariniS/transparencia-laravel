<?php

namespace App\Interfaces;

interface SicPedidoInterface{
    function getPedidoPorProtocolo($cpf, $protocolo, $tipo);
}