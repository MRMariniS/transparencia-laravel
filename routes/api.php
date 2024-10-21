<?php

use App\Http\Controllers\EsicController;
use App\Http\Controllers\PublicacaoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('aplicacoes/publicacao/{idpublicacao}', [PublicacaoController::class, 'showFormatJson'])->name("publicacao.formatJson");

