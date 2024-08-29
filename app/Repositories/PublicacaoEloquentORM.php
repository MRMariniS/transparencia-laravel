<?php

namespace App\Repositories;

use App\Interfaces\PublicacaoInterface;
use App\Models\Publicacao;
use App\Helpers\ConvertingData;
use App\Helpers\Helper;
use Illuminate\Support\Facades\DB;

class PublicacaoEloquentORM implements PublicacaoInterface
{
    function publicacaoPorModulo($cdmodulo = null, int $grupo = null, array $subgrupo = null)
    {
        $publicacoes = Publicacao::with('documentos')
        ->where('GRUPO', $grupo)
        ->whereIn('SUBGRUPO', $subgrupo)
        ->where(function($query){
            Helper::filterQueryUg($query);
        })
        ->orderBy('DATA','DESC')
        ->orderBy('NUMERO','DESC')
        ->orderBy('ANO','DESC')
        ->orderBy('DTHRPUBLICADO','DESC')
        ->orderBy('DESCRICAO','DESC')
        ->get(['ID','NUMERO','DESCRICAO', 'EMENTA', 'ANO', 'DTHRPUBLICADO']);
        
        $publicacoes = ConvertingData::convertingData($publicacoes, [
                    'NUMERO',
                    'DESCRICAO',
                    'EMENTA'
        ]);

        return $publicacoes;
    }
}