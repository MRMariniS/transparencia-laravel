<?php

namespace App\Services;

use App\Interfaces\WebServiceInterface;

class EprocServices
{
    function __construct(
        protected WebServiceInterface $eproc,
    ) {
    }

    function PublicArqsView(int $idDoc)
    {
        $response = $this->eproc->PublicArqsView($idDoc);
        return $response;
        
    }
}