<?php

namespace App\Services;

use App\Interfaces\PublicacaoInterface;

class Publicacao
{
    function __construct(
        protected PublicacaoInterface $repository,
    ) {
    }

    function getPublicacaoPorModulo($cdmodulo, int $grupo = null, array $subgrupo = null)
    {
        return $this->repository->publicacaoPorModulo($cdmodulo, $grupo, $subgrupo);
    }
}