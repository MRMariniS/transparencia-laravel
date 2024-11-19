<?php

namespace App\Services;

use App\Interfaces\LiquidacaoInterface;

class LiquidacaoServices{
    function __construct(
        protected LiquidacaoInterface $liquidacao,
    )
    {}

    function getLiquidacaos(){
        return $this->liquidacao->getLiquidacao();
    }

    function getFilterLiquidacao($ano, $empresa , $numero , $cnpj , $favorecido , $elemento , $covid , $datainicial , $datafinal){
        return $this->liquidacao->getLiquidacao($ano, $empresa, $numero, $cnpj, $favorecido, $elemento, $covid, $datainicial, $datafinal);
    }

    function getElementos($ano = null){
        return $this->liquidacao->getElementos($ano);
    }
}