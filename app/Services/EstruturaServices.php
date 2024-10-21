<?php
namespace App\Services;

use App\Interfaces\EstruturaInterface;

class EstruturaServices{
    function __construct(
        protected EstruturaInterface $estrutura,
    )
    {}

    function getEstrutura($tipo = "todas"){
        return  $this->estrutura->getEstrutura($tipo);
    }
}