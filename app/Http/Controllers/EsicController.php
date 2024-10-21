<?php

namespace App\Http\Controllers;

use App\Http\Middleware\CanaisDeInformacao;
use App\Services\EstruturaServices;
use App\Services\PublicacaoServices;
use App\Services\SicPedidoServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EsicController extends Controller
{
    function __construct(
        protected SicPedidoServices $sic,
        protected PublicacaoServices $publicacao,
        protected EstruturaServices $estrutura,
    ) {
        
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pedido = $this->sic->getPedidos("coletivo");

        return Inertia::render('Aplicacoes/Esic/Index', [
            'pedidos' => $pedido
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
    public function show(string $protocolo)
    {
        $pedido = $this->sic->getDetalhesPedido($protocolo);
        return Inertia::render('DetalhePedido', ['pedido' => $pedido]);
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
    function listaPedidoPorCPF(Request $request)
    {
        $request->validate([
            'cpf' => 'required|numeric',
            'protocolo' => 'required|numeric'
        ]);

        $pedido = $this->sic->getPedidoPorProtocolo($request->cpf, $request->protocolo);
        
        return Inertia::render('Aplicacoes/Esic/Index', ['pedidos' => $pedido]);
        
    }

    //TIPO = INDEFERIDOS, COLETIVOS
    function filtroPedido($tipo){
        $pedido = $this->sic->getPedidos($tipo);
        return Inertia::render('Aplicacoes/Esic/Index', ['pedidos' => $pedido]);
    }

}
