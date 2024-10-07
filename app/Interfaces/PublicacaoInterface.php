<?php

namespace App\Interfaces;

interface PublicacaoInterface{
    function publicacaoPorModulo($cdmodulo, int $grupo = null, array $subgrupo = null);
    function getPublicacao($idpublicacao);
}