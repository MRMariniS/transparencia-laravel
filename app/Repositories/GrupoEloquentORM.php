<?php

namespace App\Repositories;

use App\Helpers\Helper;
use App\Interfaces\GrupoInterface;
use App\Models\Grupo;

class GrupoEloquentORM implements GrupoInterface{
    function getAllGrupos()
    {
        $grupos = Grupo::all();
        $grupos = Helper::convertingData($grupos,['DESCRICAO', 'DEFINICAO']);
        
        return $grupos;
    }

    function getAllGruposAndSubGrupos($grupo = null)
    {
        $grupos = Grupo::with('subgrupo_grupo')
        ->where(function($query) use ($grupo){
            if($grupo){
                $query->where('GRUPO', $grupo);
            }
        })
        ->get();
        $grupos = Helper::convertingData($grupos,['DESCRICAO', 'DEFINICAO']);
        foreach($grupos as $item){
            $item->subgrupo_grupo = Helper::convertingData($item->subgrupo_grupo,['DESCRICAO', 'DEFINICAO']);
        }
        
        return $grupos; 
    }
}