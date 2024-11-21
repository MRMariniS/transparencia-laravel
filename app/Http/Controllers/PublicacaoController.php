<?php

namespace App\Http\Controllers;

use App\Services\PublicacaoServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicacaoController extends Controller
{
    function __construct(
        protected PublicacaoServices $publicacao,
    ) {
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('/Aplicacoes/Publicacoes/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(int $idpublicacao)
    {
        // $publicacao = $this->publicacao->getPublicacao($idpublicacao);
        // return Inertia::render('Aplicacoes/Publicacoes/DetalhePublicacao', [
        //     'publicacao' => $publicacao
        // ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    //OUTROS MÉTODOS
    public function showFormatJson(int $idpublicacao)
    {
        $publicacao = $this->publicacao->getPublicacao($idpublicacao);
        return $publicacao;
    }
}
