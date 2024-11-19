<?php

namespace App\Services;

use App\Interfaces\PagamentoInterface;

class PagamentoServices{
    function __construct(
        protected PagamentoInterface $pagamento,
    )
    {}

    function getPagamentos(){
        return $this->pagamento->getPagamentos();
    }

    function getFilterPagamento($ano, $empresa , $numero , $cnpj , $favorecido , $elemento , $covid , $datainicial , $datafinal){
        return $this->pagamento->getPagamentos($ano, $empresa, $numero, $cnpj, $favorecido, $elemento, $covid, $datainicial, $datafinal);
    }

    function getElementos($ano = null){
        return $this->pagamento->getElementos($ano);
    }
}