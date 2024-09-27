<?php

use App\Http\Controllers\EprocController;
use App\Http\Controllers\SicPedidoController;
use App\Http\Controllers\SeloController;
use Illuminate\Support\Facades\Route;

//RAIZ
Route::get('/{entidade?}', [SeloController::class, 'getImagemSelo'])->name('selo');

//ACESSO A INFORMAÇÃO
Route::get('/aplicacoes/esic', [SicPedidoController::class, 'esic'])->name('esic');
Route::get('/aplicacoes/eouv', [SicPedidoController::class, 'eouv'])->name('eouv');
Route::get('/aplicacoes/lgpd', [SicPedidoController::class, 'lgpd'])->name('lgpd');

//DETALHE PEDIDO
Route::post('/Info', [SicPedidoController::class, 'getPedidoPorProtocolo'])->name('Info');
Route::get('/detalhar-pedido/{idpedido}', [SicPedidoController::class, 'getDetalhesPedidoColetivo'])->name('DetalharPedido');

//ROTAS WEBSERVICES EPROC
Route::get('/visualizar/{idDoc}', [EprocController::class, 'PublicArqsView'])->name('visualizar.documento');


