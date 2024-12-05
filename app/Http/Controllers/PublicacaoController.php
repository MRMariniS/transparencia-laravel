<?php

namespace App\Http\Controllers;

use App\Services\GrupoServices;
use App\Services\PublicacaoServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicacaoController extends Controller
{
    function __construct(
        protected PublicacaoServices $publicacao,
        protected GrupoServices $grupo,
    ) {
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $publicacao = $this->publicacao->getPublicacao();
        $grupos_subgrupos = $this->grupo->getAllGruposAndSubgrupos();
        return Inertia::render('Publicacoes/Index', [
            'publicacoes' => $publicacao,
            'gruposSubgrupos' => $grupos_subgrupos
        ]);
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
}
