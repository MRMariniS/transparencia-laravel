<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SicPedidoTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_retorno_detalhe_pedido(): void
    {
        $response = $this->get('/detalhar-pedido/2006190004');
        dd($response);
    }
}
