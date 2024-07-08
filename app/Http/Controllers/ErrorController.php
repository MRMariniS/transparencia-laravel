<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ErrorController extends Controller
{
    function pageError()
    {
        
        return Inertia::render('ErrorPage', [
            'message' => "Ooops, algo deu errado. Por favor, tente novamente mais tarde."
        ]);
    }
}
