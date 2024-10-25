<?php

namespace App\Http\Controllers;

use App\Services\EmpenhoServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmpenhoController extends Controller
{
    function __construct(
        protected EmpenhoServices $empenho,
    )
    {}

    /**
     * Display a listing of the resource.
     */
    function index()
    {
        $empenhos =  $this->empenho->getEmpenhos();
        $elementos = $this->empenho->getElementos();
        
        return Inertia::render('Aplicacoes/Empenhos/Index', [
            'empenhos' => $empenhos,
            'elementos' => $elementos,
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
    public function show(string $id)
    {
        //
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

    function filter(Request $request)
    {
        $request->validate([
            'ano' => 'required|numeric'
        ]);
        
        $elementos = $this->empenho->getElementos($request->ano);
        $empenhos = $this->empenho->getFilterEmpenhos($request->ano, $request->empresa, $request->numero, $request->cnpj, $request->favorecido, $request->elemento, $request->covid, $request->datainicial, $request->datafinal);
        return Inertia::render('Aplicacoes/Empenhos/Index', [
            'empenhos' => $empenhos,
            'elementos' => $elementos
        ]);
    }
}
