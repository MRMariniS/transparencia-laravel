<?php

namespace App\Services;

use App\Interfaces\EstruturaTipoInterface;

class EstruturaTipoServices
{
    function __construct(
        protected EstruturaTipoInterface $estrutura,
    ) {}

    function getEstruturaTipo()
    {
        return $this->estrutura->getEstruturaTipo();
    }
}