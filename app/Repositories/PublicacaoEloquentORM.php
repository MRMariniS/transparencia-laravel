<?php

namespace App\Repositories;

use App\Interfaces\PublicacaoInterface;
use App\Models\Publicacao;
use App\Helpers\Helper;
use Illuminate\Support\Facades\DB;

class PublicacaoEloquentORM implements PublicacaoInterface
{
    private $camposPublicacao = [
        'ID',
        'GRUPO',
        'SUBGRUPO',
        'ANO',
        'DATA',
        'DESCRICAO',
        'EMENTA',
        'NUMERO',
        'DESCRICAO',
        'DTHRPUBLICADO',
        'EMENTAHTML',
        'PALAVRASCHAVE',
        'UG'
    ];

    private $camposConvertingData = [
        'NUMERO',
        'DESCRICAO',
        'EMENTA',
        'PALAVRASCHAVE',
        'EMENTAHTML',
    ];

    function getPublicacao()
    {
        $publicacao = Publicacao::with('subgrupo')->where(function ($query) {
            Helper::filterQueryUg($query);
        })
            ->select($this->camposPublicacao)
            ->orderBy('ANO', 'DESC')->orderBy('DATA', 'DESC')->orderBy('NUMERO', 'DESC')
            ->paginate(10);

        $publicacao = Helper::convertingData($publicacao, $this->camposConvertingData, ['DTHRPUBLICADO', 'DATA']);
        //dd($publicacao);
        foreach ($publicacao as $item) {
            $item->subgrupo = Helper::convertingDataHasOne(
                $item->subgrupo,
                [
                    'DESCRICAO',
                    'DEFINICAO'
                ]
            );
        }
        return $publicacao;
    }

    // function publicacaoPorModulo($cdmodulo = null, int $grupo = null, array $subgrupo = null)
    // {
    //     $publicacoes = Publicacao::with('documentos')
    //         ->where('GRUPO', $grupo)
    //         ->whereIn('SUBGRUPO', $subgrupo)
    //         ->where(function ($query) {
    //             Helper::filterQueryUg($query);
    //         })
    //         ->orderBy('DATA', 'DESC')
    //         ->orderBy('NUMERO', 'DESC')
    //         ->orderBy('ANO', 'DESC')
    //         ->orderBy('DTHRPUBLICADO', 'DESC')
    //         ->orderBy('DESCRICAO', 'DESC')
    //         ->get($this->camposPublicacao);

    //     $publicacoes = Helper::convertingData($publicacoes, $this->camposConvertingData);

    //     return $publicacoes;
    // }



    // function getPublicacaoPorGrupoOuSubgrupo(int $grupo = 1, array $subgrupo = [])
    // {
    //     $publicacao = Publicacao::with('documentos')->where(function ($query) use ($grupo, $subgrupo) {
    //         $query->where('GRUPO', $grupo);
    //         if (count($subgrupo) > 0) {
    //             $query->whereIn('SUBGRUPO', $subgrupo);
    //         }
    //     })
    //         ->where(function ($query) {
    //             Helper::filterQueryUg($query);
    //         })
    //         ->get($this->camposPublicacao);

    //     $publicacao = Helper::convertingData($publicacao, $this->camposConvertingData, ['DTHRPUBLICADO', 'DATA']);

    //     foreach ($publicacao as $item) {
    //         $item->documentos = Helper::convertingData(
    //             $item->documentos,
    //             [
    //                 'DESCRICAO'
    //             ],
    //             [
    //                 'DTHRPUBLICADO'
    //             ]
    //         );
    //     }

    //     return $publicacao;
    // }
}
