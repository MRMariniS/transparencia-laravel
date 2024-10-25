<?php

namespace App\Services;

use App\Interfaces\TabEmpresaInterface;

class TabEmpresaServices{
    function __construct(
        protected TabEmpresaInterface $empresa,
    )
    {}

    function getEmpresas($exercicio){
        return $this->empresa->getEmpresas($exercicio);
    }
}