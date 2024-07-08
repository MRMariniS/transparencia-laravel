<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class EsicController extends Controller
{
    function esic()
    {
        return Inertia::render('aplicacoes/esic/frmesic');
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
