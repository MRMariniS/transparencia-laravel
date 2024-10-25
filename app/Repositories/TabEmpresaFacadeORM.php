<?php 

namespace App\Repositories;

use App\Helpers\Helper;
use App\Interfaces\TabEmpresaInterface;
use Illuminate\Support\Facades\DB;

class TabEmpresaFacadeORM implements TabEmpresaInterface{

    function getEmpresas($exercicio)
    {
        $exercicio = Helper::verificaConnectionBdExercicio($exercicio);

        $sqlug = Helper::filterQueryTipoEmpresaScpi();
        $empresas = DB::connection('scpi'.$exercicio)
        ->select("SELECT EMPRESA, NOME, TIPO, CGC, ENDERECO, FONE, CEP, NOME_AUTORID, CARGO_AUTORID 
                  FROM TABEMPRESA
                  WHERE MOSTRA_WEB = 'S'
                  $sqlug
                  ORDER BY TIPO");
        
        $empresas = Helper::convertingDataSCPI($empresas, [
            'NOME',
            'ENDERECO',
            'NOME_AUTORID',
            'CARGO_AUTORID'
        ]);
        
        return ['exercicio' => $exercicio, $empresas];
    }
}