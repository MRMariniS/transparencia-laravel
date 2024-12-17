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
    ) {}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //dd($request);
        $ano = $request->query('exercicio');
        $empresa = $request->query('empresa');
        $numero = $request->query('numero');
        $ementa = $request->query('ementa');
        $datainicial = $request->query('dataInicial');
        $datafinal = $request->query('dataFinal');
        $grupo = $request->query('grupo');
        $subgrupo = $request->query('subgrupo');



        $publicacao = $this->publicacao->getPublicacao($ano, $empresa, $numero, $ementa, $datainicial, $datafinal, $grupo,$subgrupo);
        $grupos = $this->grupo->getAllGrupos();
        return Inertia::render('Publicacoes/Index', [
            'publicacoes' => $publicacao,
            'grupos' => $grupos,
            'url' => $request->getRequestUri()
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
