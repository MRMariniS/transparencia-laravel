<?php

namespace App\Services;

use App\Interfaces\EmpenhoInterface;

class EmpenhoServices{
    function __construct(
        protected EmpenhoInterface $empenho,
    )
    {}

    function getEmpenhos(){
        return $this->empenho->getEmpenhos();
    }

    function getFilterEmpenhos($ano, $empresa , $numero , $cnpj , $favorecido , $elemento , $covid , $datainicial , $datafinal){
        return $this->empenho->getEmpenhos($ano, $empresa, $numero, $cnpj, $favorecido, $elemento, $covid, $datainicial, $datafinal);
    }

    function getElementos($ano = null){
        return $this->empenho->getElementos($ano);
    }
}