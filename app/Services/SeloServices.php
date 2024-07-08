<?php

namespace App\Services;

use App\Interfaces\SeloInterface;

class SeloServices
{

    function __construct(
        protected SeloInterface $selo,
    ) {
    }

    function getImagemSelo()
    {
        return $this->selo->getImagemSelo();
    }
}