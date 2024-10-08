<?php

use App\Http\Controllers\EprocController;
use App\Http\Controllers\EsicController;
use App\Http\Controllers\EsicController2;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PublicacaoController;
use App\Http\Controllers\SicPedidoController;
use App\Http\Controllers\SeloController;
use Illuminate\Support\Facades\Route;

//RAIZ
//Route::get('/{entidade?}', [SeloController::class, 'getImagemSelo'])->name('Home');

//ACESSO A INFORMAÇÃO
//Route::get('/aplicacoes/esic/{tipo?}', [SicPedidoController::class, 'esic'])->name('esic');
//Route::post('/aplicacoes/esic/', [SicPedidoController::class, 'getPedidoPorProtocolo'])->name('ConsultarPedido');

// 

Route::resource('/', HomeController::class)->only('index');
Route::resource('/esic', EsicController::class)->except('destroy');
Route::resource('/selo', SeloController::class)->only('index');