<?php

namespace App\Providers;

use App\Http\Controllers\EmpenhoController;
use App\Http\Controllers\TabEmpresaController;
use App\Interfaces\EmpenhoInterface;
use App\Interfaces\EntityInterface;
use App\Interfaces\EstruturaInterface;
use App\Interfaces\GrupoInterface;
use App\Interfaces\LiquidacaInterface;
use App\Interfaces\LiquidacaoInterface;
use App\Interfaces\PagamentoInterface;
use App\Interfaces\PublicacaoInterface;
use App\Interfaces\SeloInterface;
use App\Interfaces\SicPedidoInterface;
use App\Interfaces\SubGrupoInterface;
use App\Interfaces\TabEmpresa;
use App\Interfaces\TabEmpresaInterface;
use App\Interfaces\UrlInterface;
use App\Interfaces\WebServiceInterface;
use App\Models\EstruturaTipo;
use App\Repositories\EmpenhoFacadeORM;
use App\Repositories\EntityEloquentORM;
use App\Repositories\EprocWebServices;
use App\Repositories\EstruturaEloquentORM;
use App\Repositories\GrupoEloquentORM;
use App\Repositories\LiquidacaoFacadeORM;
use App\Repositories\LiquidicaoFacadeORM;
use App\Repositories\PagamentoFacadeORM;
use App\Repositories\PublicacaoEloquentORM;
use App\Repositories\SeloEloquentORM;
use App\Repositories\SicPedidoEloquentORM;
use App\Repositories\SubGrupoFacadeORM;
use App\Repositories\TabEmpresaFacadeORM;
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
        $this->app->bind(EmpenhoInterface::class, EmpenhoFacadeORM::class);
        $this->app->bind(TabEmpresaInterface::class, TabEmpresaFacadeORM::class);
        $this->app->bind(LiquidacaoInterface::class, LiquidacaoFacadeORM::class);
        $this->app->bind(PagamentoInterface::class, PagamentoFacadeORM::class);
        $this->app->bind(GrupoInterface::class, GrupoEloquentORM::class);
        $this->app->bind(SubGrupoInterface::class, SubGrupoFacadeORM::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
