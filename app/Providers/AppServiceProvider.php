<?php

namespace App\Providers;

use App\Interfaces\EntityInterface;
use App\Interfaces\EstruturaInterface;
use App\Interfaces\PublicacaoInterface;
use App\Interfaces\SeloInterface;
use App\Interfaces\SicPedidoInterface;
use App\Interfaces\UrlInterface;
use App\Interfaces\WebServiceInterface;
use App\Models\EstruturaTipo;
use App\Repositories\EntityEloquentORM;
use App\Repositories\EprocWebServices;
use App\Repositories\EstruturaEloquentORM;
use App\Repositories\PublicacaoEloquentORM;
use App\Repositories\SeloEloquentORM;
use App\Repositories\SicPedidoEloquentORM;
use App\Repositories\UrlEloquentORM;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Inertia::share('app', [
            'name' => env('APP_NAME'),
            'version' => env('APP_VERSION')
        ]);

        $this->app->bind(UrlInterface::class, UrlEloquentORM::class);
        $this->app->bind(EntityInterface::class, EntityEloquentORM::class);
        $this->app->bind(SeloInterface::class, SeloEloquentORM::class);
        $this->app->bind(PublicacaoInterface::class, PublicacaoEloquentORM::class);
        $this->app->bind(WebServiceInterface::class, EprocWebServices::class);
        $this->app->bind(SicPedidoInterface::class, SicPedidoEloquentORM::class);
        $this->app->bind(EstruturaInterface::class, EstruturaEloquentORM::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
