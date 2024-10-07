<?php

namespace App\Http\Controllers;

use App\Services\Publicacao;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicacaoController extends Controller
{
    function __construct(
        protected Publicacao $publicacao,
    ) {}

    function getPublicacao($idpublicacao)
    {
        $publicacao = $this->publicacao->getPublicacao($idpublicacao);
        return Inertia::render('Aplicacoes/Publicacoes/DetalhePublicacao', [
            'publicacao' => $publicacao
        ]);
    }
}
