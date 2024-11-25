<?php

namespace App\Http\Middleware;

use App\Models\Exercicio;
use App\Services\EntityServices;
use Illuminate\Http\Request;
use Inertia\Middleware;

class Exercicios extends Middleware
{
    function __construct(
        protected EntityServices $entity,
    ) {
    }
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $ano = Exercicio::where('ATIVO', 'S')->max('ANO');
        session()->put('ULTIMOANOATIVO', $ano);
        $exercicios = Exercicio::where('ATIVO', 'S')->orderBy('ANO', 'ASC')->get();
        $ugDefault =  session()->get('UG');
        $nomeUgDefault = session()->get('NOMEENTIDADE');
        $tipo = strtoupper($request->entidade);
        $entidades = $this->entity->getAccountingEntity($ano, $tipo);
        
        return array_merge(parent::share($request), [
            'exercicioDefault' => $ano,
            'ugDefault' => $ugDefault,
            'nomeUgDefault' => $nomeUgDefault,
            'exercicios'=> $exercicios,
            'empresas' => $entidades,
            'entidadeRota' => session()->get('ENTIDADEROTA') ? session()->get('ENTIDADEROTA') : 'executivo'
        ]);
    }
}
