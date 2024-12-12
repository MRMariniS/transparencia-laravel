<?php

namespace App\Repositories;

use App\Interfaces\PublicacaoInterface;
use App\Models\Publicacao;
use App\Helpers\Helper;
use App\Models\Publicarqs;
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
        if (session()->get('TIPOEMPRESA') == 1) {
            $queryUG = "(A.UG NOT IN(" . session()->get('UGCAMARA') . "," . session()->get('UGRPPS') . ") OR A.UG IS NULL)";
        } else {
            $queryUG = "(A.UG =" . session()->get("UG") . ")";
        }

        $publicacao = DB::connection('transparencia')->table(DB::raw("(
        select A.ID, A.NUMERO, A.ANO, A.DESCRICAO, A.GRUPO, A.SUBGRUPO, A.EMENTA, A.DATA, A.CONSOLIDACAO,
                       A.DTHRPUBLICADO,B.DESCRICAO as NOME_SUBGRUPO, A.PUBLICADO
                        from PUBLICACAO A
                        inner join SUBGRUPO B on (B.SUBGRUPO = A.SUBGRUPO and B.GRUPO = A.GRUPO)
                        inner join GRUPO G on (G.GRUPO = A.GRUPO)
                        where ((A.PUBLICADO = 'S' and
                            A.LIMITE = 'N') or (A.LIMITE = 'S' and
                            A.DTHRLIMITE > current_timestamp)) and
                            exists(select 1
                                    from PUBLICARQS C
                                    where C.PUBLICACAO = A.ID and
                                        ((C.PUBLICADO = 'S' and
                                        C.LIMITE = 'N') or (C.LIMITE = 'S' and
                                        C.DTHRLIMITE > current_timestamp))) and
                            (select count(*)
                            from PUBLICARQS C
                            where ((C.PUBLICADO = 'S' and
                                    C.LIMITE = 'N') or (C.LIMITE = 'S' and
                                    C.DTHRLIMITE > current_timestamp))) >= 0 and
                            A.DATA <= current_date and
                            $queryUG
                        order by A.DATA desc, A.NUMERO desc, A.ANO desc, A.DTHRPUBLICADO desc, A.DESCRICAO desc) as subquery"))
            ->orderBy('DATA', 'DESC')
            ->orderBy('NUMERO', 'DESC')
            ->orderBy('ANO', 'DESC')
            ->orderBy('DTHRPUBLICADO', 'DESC')
            ->orderBy('DESCRICAO', 'DESC')
            ->paginate(10);


        //order by A.DATA desc, A.NUMERO desc, A.ANO desc, A.DTHRPUBLICADO desc, A.DESCRICAO desc

        $publicacao = Helper::convertingData(
            $publicacao,
            [
                'DESCRICAO',
                'EMENTA',
                'NUMERO',
                'NOME_SUBGRUPO'
            ],
            ['DATA', 'DTHRPUBLICADO']
        );
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
