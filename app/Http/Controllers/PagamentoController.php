<?php

namespace App\Http\Controllers;

use App\Services\PagamentoServices;
use App\Services\TabEmpresaServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagamentoController extends Controller
{
    function __construct(
        protected PagamentoServices $pagamento,
        protected TabEmpresaServices $empresa,
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    function index()
    {
        $pagamento = $this->pagamento->getPagamentos();
        $elementos = $this->pagamento->getElementos();

        return Inertia::render('Despesa/Pagamentos/Index', [
            'pagamentos' => $pagamento,
            'elementos' => $elementos,
        ]);
    }

    function empresas(Request $request)
    {
        $request->validate(['exercicio', 'required']);
        $empresas = $this->empresa->getEmpresas($request->exercicio);
        $elementos = $this->pagamento->getElementos($request->exercicio);
        return Inertia::render('Despesa/Pagamentos/Index', ['empresas' => $empresas, 'elementos' => $elementos]);
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

        $elementos = $this->pagamento->getElementos($request->query('exercicio'));
        $pagamento = $this->pagamento->getFilterPagamento($request->query('exercicio'), $request->query('empresa'), $request->query('empenho'), $request->query('cpfCnpj'), $request->query('nomeFavorecido'), $request->query('elemento'), $request->query('covid'), $request->query('dataInicial'), $request->query('dataFinal'));

        return Inertia::render('Despesa/Pagamentos/Index', [
            'pagamentos' => $pagamento,
            'elementos' => $elementos,
            'url' => $request->getRequestUri()
        ]);
    }
}
