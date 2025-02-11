<?php

namespace App\Repositories;

use App\Interfaces\PublicacaoInterface;
use App\Models\Publicacao;
use App\Helpers\Helper;
use App\Models\Publicarqs;
use Illuminate\Support\Facades\DB;

class PublicacaoEloquentORM implements PublicacaoInterface
{

    function getPublicacao($ano, $empresa = null, $numero = null, $ementa = null, $datainicial = null, $datafinal = null, $grupo = null, $subgrupo = null)
    {
        $queryGrupo = "";
        $queryGruposSubgrupo = "";
        $queryEmenta = "";
        $queryPeriodo = "";
        
        if (!$empresa) {
            if (session()->get('TIPOEMPRESA') == 1) {
                $ugrpps = session()->has('UGRPPS') ? "," . session()->get('UGRPPS') : "";
                $queryUG = "(A.UG NOT IN(" . session()->get('UGCAMARA') . $ugrpps . ") OR A.UG IS NULL)";
            } else if (session()->get('TIPOEMPRESA') == 8) {
                $queryUG = "(A.UG =" . session()->get("UG") . " OR A.RPPS = 'S')";
            } else {
                $queryUG = "(A.UG =" . session()->get("UG") . ")";
            }
        } else {
            $empresa = implode(",", $empresa);
            $queryUG = "(A.UG IN($empresa))";
        }

        if (!$ano) {
            $ano = date('Y');
        }

        if ($grupo) {
            $queryGrupo = "AND A.GRUPO = $grupo";
        }

        if ($grupo && $subgrupo) {
            $subgrupo = implode(",", $subgrupo);
            $queryGruposSubgrupo = "AND A.SUBGRUPO IN($subgrupo)";
        }

        if($ementa){
            $queryEmenta = "AND (A.EMENTA LIKE '%$ementa%')";
        }

        if($datainicial){
            $datainicial = date('d.m.Y', strtotime($datainicial));
            $queryPeriodo = "AND (A.DTHRPUBLICADO >= '$datainicial')";
        }

        if($datainicial && $datafinal){
            $datafinal = date('d.m.Y', strtotime($datafinal));
            $queryPeriodo = "AND (A.DTHRPUBLICADO BETWEEN '$datainicial' AND '$datafinal')";
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
                            $queryGrupo
                            $queryGruposSubgrupo
                            AND (EXTRACT(YEAR FROM DTHRPUBLICADO) = $ano)
                            $queryEmenta
                            $queryPeriodo
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
        //file_put_contents('publicacoes.json', print_r($publicacao, true));
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



    function getPublicacaoPorGrupoOuSubgrupo(int $grupo = 1, array $subgrupo = [])
    {
        $publicacao = Publicacao::with('documentos')->where(function ($query) use ($grupo, $subgrupo) {
            $query->where('GRUPO', $grupo);
            if (count($subgrupo) > 0) {
                $query->whereIn('SUBGRUPO', $subgrupo);
            }
        })
            ->where(function ($query) {
                Helper::filterQueryUg($query);
            })
            ->get([
                'ID',
                'NUMERO',
                'ANO',
                'DESCRICAO',
                'GRUPO',
                'SUBGRUPO',
                'EMENTA',
                'DATA',
                'CONSOLIDACAO',
                'DTHRPUBLICADO',
                'PUBLICADO'
            ]);

        $publicacao = Helper::convertingData($publicacao, [
            'DESCRICAO',
            'EMENTA',
            'NUMERO'
        ], ['DTHRPUBLICADO', 'DATA']);

        foreach ($publicacao as $item) {
            $item->documentos = Helper::convertingData(
                $item->documentos,
                [
                    'DESCRICAO'
                ],
                [
                    'DTHRPUBLICADO'
                ]
            );
        }

        return $publicacao;
    }
}
