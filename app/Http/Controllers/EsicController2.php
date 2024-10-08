<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EsicController2 extends Controller
{
    function esic()
    {
        return inertia('Aplicacoes/Esic/index');
    }
    function eouv()
    {
        return Inertia::render('aplicacoes/eouv/frmeouv');
    }
    function lgpd()
    {
        return Inertia::render('aplicacoes/lgpd/frmlgpd');
    }
}
