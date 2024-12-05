<?php

namespace App\Interfaces;

interface GrupoInterface{
    function getAllGrupos();
    function getAllGruposAndSubGrupos($grupo = null);
}