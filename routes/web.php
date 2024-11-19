<?php

use App\Http\Controllers\EmpenhoController;
use App\Http\Controllers\EouvController;
use App\Http\Controllers\EprocController;
use App\Http\Controllers\EsicController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LgpdController;
use App\Http\Controllers\LiquidacaoController;
use App\Http\Controllers\PagamentoController;
use App\Http\Controllers\PublicacaoController;
use App\Http\Controllers\SeloController;
use App\Http\Controllers\TabEmpresaController;
use App\Http\Middleware\CanaisDeInformacao;
use Illuminate\Support\Facades\Route;

//RAIZ
Route::get('/', [HomeController::class, 'index'])->name('/');

//ACESSO A INFORMAÇÃO
//Route::get('/acesso-a-informacao/esic/{tipo?}', [SicPedidoController::class, 'esic'])->name('esic');
//Route::post('/acesso-a-informacao/esic/', [SicPedidoController::class, 'getPedidoPorProtocolo'])->name('ConsultarPedido');

// 
Route::resource('/aplicacoes/selo', SeloController::class)->only('index');

Route::resource('/{entidade?}', HomeController::class)->only('index');
Route::resource('/aplicacoes/esic', EsicController::class)->except('destroy')->middleware(CanaisDeInformacao::class . ':esic');
Route::post('/acesso-a-informacao/esic/consulta/meus-pedidos', [EsicController::class, 'listaPedidoPorCPF'])->name('esic.meuspedidos');
Route::get('/acesso-a-informacao/esic/pedidos/{tipo}', [EsicController::class, 'filtroPedido'])->name('esic.tipospedidos');

Route::resource('/acesso-a-informacao/lgpd', LgpdController::class)->only('index')->middleware(CanaisDeInformacao::class . ':lgpd');

Route::resource('/acesso-a-informacao/eouv', EouvController::class)->only('index')->middleware(CanaisDeInformacao::class . ':eouv');

Route::resource('/aplicacoes/publicacao', PublicacaoController::class);

Route::get('/despesa/empenhos', [EmpenhoController::class, 'index'])->name('empenho.index');
Route::get('/despesa/filter/empenhos/', [EmpenhoController::class, 'filter'])->name('empenho.filter');
Route::post('/despesa/empenhos', [EmpenhoController::class, 'empresas'])->name('empenho.empresas');

Route::get('/despesa/liquidacao', [LiquidacaoController::class, 'index'])->name('liquidacao.index');
Route::get('/despesa/filter/liquidacao/', [LiquidacaoController::class, 'filter'])->name('liquidacao.filter');
Route::post('/despesa/liquidacao', [LiquidacaoController::class, 'empresas'])->name('liquidacao.empresas');

Route::get('/despesa/pagamento', [PagamentoController::class, 'index'])->name('pagamento.index');
Route::get('/despesa/filter/pagamento/', [PagamentoController::class, 'filter'])->name('pagamento.filter');
Route::post('/despesa/pagamento', [PagamentoController::class, 'empresas'])->name('pagamento.empresas');

Route::get('aplicacoes/scpi/empresas/{exercicio}', [TabEmpresaController::class, 'getEmpresaReturnJson'])->name('scpi.tabempresa');

Route::get('PublicArqsView/{iddoc}', [EprocController::class, 'PublicArqsView'])->name('eproc.publicarqsview');
