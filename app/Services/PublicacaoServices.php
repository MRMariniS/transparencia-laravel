<?php

namespace App\Services;

use App\Interfaces\PublicacaoInterface;

class PublicacaoServices
{
    function __construct(
        protected PublicacaoInterface $publicacao,
    ) {
    }

    function getPublicacao($ano, $empresa = null, $numero = null, $ementa = null, $datainicial = null, $datafinal = null, $grupo = null, $subgrupo = null){
        return $this->publicacao->getPublicacao($ano, $empresa = null, $numero = null, $ementa = null, $datainicial = null, $datafinal = null, $grupo = null, $subgrupo = null);
    }

    // function getPublicacaoPorModulo($cdmodulo, int $grupo = null, array $subgrupo = null)
    // {
    //     return $this->publicacao->publicacaoPorModulo($cdmodulo, $grupo, $subgrupo);
    // }

    

    // function getPublicacaoPorGrupoOuSubgrupo(int $grupo = 1, array $subgrupo = []){
    //     return $this->publicacao->getPublicacaoPorGrupoOuSubgrupo($grupo, $subgrupo);
    // }
}