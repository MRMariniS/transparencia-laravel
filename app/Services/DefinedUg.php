<?php

namespace App\Services;

class DefinedUg
{
    function __construct($tipoentidade)
    {
        $this->ug($tipoentidade);
    }

    function ug($tipoentidade)
    {
        $tipoentidade = strtoupper($tipoentidade);

        if($tipoentidade == 'RPPS') {
            session(['empresa' => 8]);
        } elseif ($tipoentidade == 'CM') {
            session(['empresa' => 2]);
        } else {
            session(['empresa', null]);
        }
    }
}