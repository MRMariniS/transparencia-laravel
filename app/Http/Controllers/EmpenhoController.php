<?php

namespace App\Http\Controllers;

use App\Services\EmpenhoServices;
use App\Services\TabEmpresaServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EmpenhoController extends Controller
{
    function __construct(
        protected EmpenhoServices $empenho,
        protected TabEmpresaServices $empresa,
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    function index()
    {
        $empenhos = $this->empenho->getEmpenhos();
        $elementos = $this->empenho->getElementos();

        return Inertia::render('Aplicacoes/Empenhos/Index', [
            'empenhos' => $empenhos,
            'elementos' => $elementos,
        ]);
    }

    function empresas(Request $request)
    {
        $request->validate(['exercicio', 'required']);
        $empresas = $this->empresa->getEmpresas($request->exercicio);
        $elementos = $this->empenho->getElementos($request->exercicio);
        return Inertia::render('Aplicacoes/Empenhos/Index', ['empresas' => $empresas, 'elementos' => $elementos]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
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
