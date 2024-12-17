<?php

namespace App\Interfaces;

interface PublicacaoInterface{
    function getPublicacao($ano, $empresa = null, $numero = null, $ementa = null, $datainicial = null, $datafinal = null, $grupo = null, $subgrupo = null);
    // function publicacaoPorModulo($cdmodulo, int $grupo = null, array $subgrupo = null);
    // function getPublicacaoPorGrupoOuSubgrupo(int $grupo, array $subgrupo = []);
}