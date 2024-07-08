<?php

namespace App\Repositories;

use App\Interfaces\PublicacaoInterface;
use App\Models\Publicacao;
use App\Services\ConvertingData;
use Illuminate\Support\Facades\DB;

class PublicacaoEloquentORM implements PublicacaoInterface
{
    function publicacaoPorModulo($cdmodulo = null, int $grupo = null, array $subgrupo = null)
    {
        $publicacoes = Publicacao::with('documentos')
        ->where('GRUPO', $grupo)
        ->whereIn('SUBGRUPO', $subgrupo)
        ->where(function($query){
            if (session()->get('TIPOEMPRESA') == 1) {
                $query->whereNotIn('UG', [session()->get('UGCAMARA'), session()->get('UGRPPS')])
                    ->orWhereNull("UG");
            } else {
                $query->where('UG', session()->get('UG'))->orWhereNull("UG");
            }
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