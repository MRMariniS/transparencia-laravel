<?php

use App\Http\Controllers\EprocController;
use App\Http\Controllers\PublicacaoController;
use App\Http\Controllers\SicPedidoController;
use App\Http\Controllers\SeloController;
use Illuminate\Support\Facades\Route;

//RAIZ
Route::get('/{entidade?}', [SeloController::class, 'getImagemSelo'])->name('selo');

//ACESSO A INFORMAÇÃO
Route::get('/aplicacoes/esic/{tipo?}', [SicPedidoController::class, 'esic'])->name('esic');
Route::post('/aplicacoes/esic/', [SicPedidoController::class, 'getPedidoPorProtocolo'])->name('ConsultarPedido');

Route::get('/aplicacoes/eouv', [SicPedidoController::class, 'eouv'])->name('eouv');
Route::get('/aplicacoes/lgpd', [SicPedidoController::class, 'lgpd'])->name('lgpd');

//ACESSO A INFORMAÇÃO - PEDIDOS
Route::get('/detalhar-pedido/{protocolo}', [SicPedidoController::class, 'getDetalhesPedido'])->name('DetalharPedido');



//ROTAS PUBLICACOES
Route::get('/detalhar-publicacao/{idpublicacao}',[PublicacaoController::class, 'getPublicacao'])->name('DetalharPublicacao');

//ROTAS WEBSERVICES EPROC
Route::get('/visualizar/{iddoc}', [EprocController::class, 'PublicArqsView'])->name('VisualizarDocumento');


