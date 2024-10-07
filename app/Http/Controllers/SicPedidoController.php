<?php

namespace App\Http\Controllers;

use App\Services\SicPedidoServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SicPedidoController extends Controller
{
    function __construct(
        protected SicPedidoServices $sic,
    ) {
    }

    public function esic($tipo = "coletivo")
    {
        $pedido = $this->sic->getPedidos($tipo);
        return Inertia::render('Aplicacoes/Esic/Index', ['pedidos' => $pedido]);
    }
    function eouv()
    {
        return inertia('Aplicacoes/Eouv/Index');
    }
    function lgpd()
    {
        return inertia('Aplicacoes/Esic/Index');
    }

    function getPedidoPorProtocolo(Request $request)
    {
        $request->validate([
            'cpf' => 'required|numeric',
            'protocolo' => 'required|numeric'
        ]);

        $pedido = $this->sic->getPedidoPorProtocolo($request->cpf, $request->protocolo);
        
        return Inertia::render('Aplicacoes/Esic/Index', ['pedidos' => $pedido]);
        
    }

    function getDetalhesPedido($protocolo){
        $pedido = $this->sic->getDetalhesPedido($protocolo);
        return Inertia::render('DetalhePedido', ['pedido' => $pedido]);
    }
}
