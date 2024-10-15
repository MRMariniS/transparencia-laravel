<?php

use App\Http\Controllers\EsicController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PublicacaoController;
use App\Http\Controllers\SeloController;
use Illuminate\Support\Facades\Route;

//RAIZ
//Route::get('/{entidade?}', [SeloController::class, 'getImagemSelo'])->name('Home');

//ACESSO A INFORMAÇÃO
//Route::get('/aplicacoes/esic/{tipo?}', [SicPedidoController::class, 'esic'])->name('esic');
//Route::post('/aplicacoes/esic/', [SicPedidoController::class, 'getPedidoPorProtocolo'])->name('ConsultarPedido');

// 

Route::resource('/{entidade?}', HomeController::class)->only('index');
Route::resource('/aplicacoes/esic', EsicController::class)->except('destroy');
Route::post('/aplicacoes/esic/consulta/meus-pedidos', [EsicController::class, 'listaPedidoPorCPF'])->name('esic.meuspedidos');
Route::get('/aplicacoes/esic/pedidos/{tipo}', [EsicController::class, 'filtroPedido'])->name('esic.tipospedidos');
Route::resource('/aplicacoes/selo', SeloController::class)->only('index');

Route::resource('/aplicacoes/publicacao', PublicacaoController::class);