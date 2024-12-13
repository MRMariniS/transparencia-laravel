<?php

namespace App\Services;

use App\Interfaces\SubGrupoInterface;

class SubGrupoServices
{
    function __construct(
        protected SubGrupoInterface $subgrupo,
    ) {}

    function getSubGrupos($grupo)
    {
        return $this->subgrupo->getSubGrupos($grupo);
    }
}
