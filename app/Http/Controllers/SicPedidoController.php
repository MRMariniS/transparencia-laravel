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

    function getPedidoPorProtocolo(Request $request)
    {

        $this->validate($request, [
            'cpf' => 'required',
            'protocolo' => 'required|numeric',
            'tipo' => 'required|numeric'
        ]);

        $tipo = $request->tipo;
        $pedido = $this->sic->getPedidoPorProtocolo($request->cpf, $request->protocolo, $request->tipo);
        if(!$pedido->isEmpty()){
            if($tipo == 1){
                return Inertia::render('aplicacoes/esic/DetalhePedido', ['pedido' => $pedido]);
            }else if($tipo == 2){
                return Inertia::render('aplicacoes/eouv/DetalhePedido', ['pedido' => $pedido]);
            }else{
                return Inertia::render('aplicacoes/lgpd/DetalhePedido', ['pedido' => $pedido]);
            }
        }else{
            return redirect(session()->get('ENTIDADEROTA') . '/error');
        }
    }
}
