<?php

use App\Http\Controllers\EouvController;
use App\Http\Controllers\EprocController;
use App\Http\Controllers\EsicController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LgpdController;
use App\Http\Controllers\PublicacaoController;
use App\Http\Controllers\SeloController;
use App\Http\Middleware\CanaisDeInformacao;
use Illuminate\Support\Facades\Route;

//RAIZ
//Route::get('/{entidade?}', [SeloController::class, 'getImagemSelo'])->name('Home');

//ACESSO A INFORMAÇÃO
//Route::get('/aplicacoes/esic/{tipo?}', [SicPedidoController::class, 'esic'])->name('esic');
//Route::post('/aplicacoes/esic/', [SicPedidoController::class, 'getPedidoPorProtocolo'])->name('ConsultarPedido');

// 
Route::resource('/aplicacoes/selo', SeloController::class)->only('index');

Route::resource('/{entidade?}', HomeController::class)->only('index');
Route::resource('/aplicacoes/esic', EsicController::class)->except('destroy')->middleware(CanaisDeInformacao::class.':esic');
Route::post('/aplicacoes/esic/consulta/meus-pedidos', [EsicController::class, 'listaPedidoPorCPF'])->name('esic.meuspedidos');
Route::get('/aplicacoes/esic/pedidos/{tipo}', [EsicController::class, 'filtroPedido'])->name('esic.tipospedidos');

Route::resource('/aplicacoes/lgpd', LgpdController::class)->only('index')->middleware(CanaisDeInformacao::class.':lgpd');

Route::resource('/aplicacoes/eouv', EouvController::class)->only('index')->middleware(CanaisDeInformacao::class.':eouv');

Route::resource('/aplicacoes/publicacao', PublicacaoController::class);
Route::get('PublicArqsView/{iddoc}', [EprocController::class, 'PublicArqsView'])->name('eproc.publicarqsview');