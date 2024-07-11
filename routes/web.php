<?php

use App\Http\Controllers\EprocController;
use App\Http\Controllers\ErrorController;
use App\Http\Controllers\EsicController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SeloController;
use App\Http\Controllers\SicPedidoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__ . '/auth.php';

Route::prefix('{entidade?}')->group(function () {
    //RAIZ
    Route::get('/', [SeloController::class, 'getImagemSelo'])->name('selo');

    // //E-SIC
    // Route::get(session()->get('ENTIDADEROTA') . '/aplicacoes-esic-frmesic', [EsicController::class, 'esic'])
    //     ->name('esic');

    // //E-OUV
    // Route::get(session()->get('ENTIDADEROTA') . '/aplicacoes-eouv-frmeouv', [EsicController::class, 'eouv'])
    //     ->middleware([
    //         'publicacaoPorModulo:98,4',
    //     ])->name('eouv');

    // //LGPD
    // Route::get(session()->get('ENTIDADEROTA') . '/aplicacoes-lgpd-frmlgpd', [EsicController::class, 'lgpd'])
    //     ->middleware([
    //         'publicacaoPorModulo:98,6|7',
    //     ])->name('lgpd');
    //404
    Route::get(session()->get('ENTIDADEROTA') . '/error', [ErrorController::class, 'pageError'])->name('error');
});

Route::get('/aplicacoes/esic', [EsicController::class, 'index'])->name('esic');

//ROTAS WEBSERVICES EPROC
Route::get('/visualizar/{idDoc}', [EprocController::class, 'PublicArqsView'])->name('visualizar.documento');

//DETALHE PEDIDO
Route::post('/sicpedido', [SicPedidoController::class, 'getPedidoPorProtocolo'])->name('sicpedido');


