<?php

namespace App\Http\Controllers;

use App\Services\LiquidacaoServices;
use App\Services\TabEmpresaServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LiquidacaoController extends Controller
{
    function __construct(
        protected LiquidacaoServices $liquidacao,
        protected TabEmpresaServices $empresa,
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    function index()
    {
        $liquidacao = $this->liquidacao->getLiquidacaos();
        $elementos = $this->liquidacao->getElementos();

        // dd($liquidacao);

        return Inertia::render('Despesa/Liquidacoes/Index', [
            'liquidacoes' => $liquidacao,
            'elementos' => $elementos,
        ]);
    }

    function empresas(Request $request)
    {
        $request->validate(['exercicio', 'required']);
        $empresas = $this->empresa->getEmpresas($request->exercicio);
        $elementos = $this->liquidacao->getElementos($request->exercicio);
        return Inertia::render('Despesa/Liquidacoes/Index', ['empresas' => $empresas, 'elementos' => $elementos]);
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

        $elementos = $this->liquidacao->getElementos($request->query('exercicio'));
        $liquidacao = $this->liquidacao->getFilterLiquidacao($request->query('exercicio'), $request->query('empresa'), $request->query('empenho'), $request->query('cpfCnpj'), $request->query('nomeFavorecido'), $request->query('elemento'), $request->query('covid'), $request->query('dataInicial'), $request->query('dataFinal'));

        return Inertia::render('Despesa/Liquidacoes/Index', [
            'liquidacoes' => $liquidacao,
            'elementos' => $elementos,
            'url' => $request->getRequestUri()
        ]);
    }
}
