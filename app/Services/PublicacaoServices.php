<?php

namespace App\Services;

use App\Interfaces\PublicacaoInterface;

class PublicacaoServices
{
    function __construct(
        protected PublicacaoInterface $publicacao,
    ) {
    }

    function getPublicacao(){
        return $this->publicacao->getPublicacao();
    }

    // function getPublicacaoPorModulo($cdmodulo, int $grupo = null, array $subgrupo = null)
    // {
    //     return $this->publicacao->publicacaoPorModulo($cdmodulo, $grupo, $subgrupo);
    // }

    

    // function getPublicacaoPorGrupoOuSubgrupo(int $grupo = 1, array $subgrupo = []){
    //     return $this->publicacao->getPublicacaoPorGrupoOuSubgrupo($grupo, $subgrupo);
    // }
}