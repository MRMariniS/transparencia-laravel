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

        return Inertia::render('Despesa/Empenhos/Index', [
            'empenhos' => $empenhos,
            'elementos' => $elementos,
        ]);
    }

    function empresas(Request $request)
    {
        $request->validate(['exercicio', 'required']);
        $empresas = $this->empresa->getEmpresas($request->exercicio);
        $elementos = $this->empenho->getElementos($request->exercicio);
        return Inertia::render('Despesa/Empenhos/Index', ['empresas' => $empresas, 'elementos' => $elementos]);
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
            'exercicio' => 'required|numeric'
        ]);

        $elementos = $this->empenho->getElementos($request->query('exercicio'));
        $empenhos = $this->empenho->getFilterEmpenhos($request->query('exercicio'), $request->query('empresa'), $request->query('empenho'), $request->query('cpfCnpj'), $request->query('nomeFavorecido'), $request->query('elemento'), $request->query('covid'), $request->query('dataInicial'), $request->query('dataFinal'));

        return Inertia::render('Despesa/Empenhos/Index', [
            'empenhos' => $empenhos,
            'elementos' => $elementos,
            'url' => $request->getRequestUri()
        ]);
    }
}
