<?php

namespace App\Interfaces;

interface EmpenhoInterface{
    function getEmpenhos($ano = null, $empresa = null, $numero = null, $cnpj = null, $favorecido = null, $elemento = null, $covid = null, $datainicial = null, $datafinal = null);
    function getElementos($ano = null);
}