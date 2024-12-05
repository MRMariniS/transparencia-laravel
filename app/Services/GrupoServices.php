<?php

namespace App\Services;

use App\Interfaces\GrupoInterface;

class GrupoServices{
    function __construct(
        protected GrupoInterface $grupo,
    )
    {}

    function getAllGrupos(){
        return $this->grupo->getAllGrupos();
    }

    function getAllGruposAndSubgrupos($grupo = null){
        return $this->grupo->getAllGruposAndSubGrupos($grupo);
    }
}