<?php

namespace App\Http\Controllers;

use App\Services\SeloServices;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    function __construct(
        protected SeloServices $service,
    ) {}
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $selo = $this->service->getImagemSelo();
        
        return Inertia::render('Welcome');
    }
   
}
