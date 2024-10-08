<?php

namespace App\Http\Controllers;

use App\Services\SicPedidoServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EsicController extends Controller
{
    function __construct(
        protected SicPedidoServices $sic,
    ) {
    }
    /**
     * Display a listing of the resource.
     */
    public function index($tipo = "coletivo")
    {
        $pedido = $this->sic->getPedidos($tipo);
        return Inertia::render('Aplicacoes/Esic/Index', ['pedidos' => $pedido]);
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
}
