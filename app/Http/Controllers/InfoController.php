<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InfoController extends Controller
{
    public function esic()
    {
        return inertia('Aplicacoes/Esic/Index');
    }
    function eouv()
    {
        return inertia('Aplicacoes/Eouv/Index');
    }
    function lgpd()
    {
        return inertia('Aplicacoes/Esic/Index');
    }
}
