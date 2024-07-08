<?php

namespace App\Http\Controllers;

use App\Services\SeloServices;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeloController extends Controller
{
   function __construct(
    protected SeloServices $service,
   ){}

   function getImagemSelo(){
     $selo = $this->service->getImagemSelo();

     return Inertia::render('Welcome', [
              'canLogin' => Route::has('login'),
              'canRegister' => Route::has('register'),
              'laravelVersion' => Application::VERSION,
              'phpVersion' => PHP_VERSION,
              'selo' => $selo
          ]);
   }
}
