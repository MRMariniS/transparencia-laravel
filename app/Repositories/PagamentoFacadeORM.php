<?php

namespace App\Repositories;

use App\Helpers\Helper;
use App\Interfaces\PagamentoInterface;
use Illuminate\Support\Facades\DB;

class PagamentoFacadeORM implements PagamentoInterface
{

    function getPagamentos($ano = null, $empresa = null, $numero = null, $cnpj = null, $favorecido = null, $elemento = null, $covid = null, $datainicial = null, $datafinal = null)
    {
        $sql_empresa = "";
        $sql_filtra_periodo = "";
        $sql_filtra_num_empenho = "";
        $sql_covid = "";
        $sql_covid_extra = "";
        $sql_filtra_favorecido_nome = "";
        $sql_filtra_favorecido_cnpj = "";
        $sql_elemento = "";

        if (!$ano) {
            $ano = date('Y');
        }

        if (!$datainicial) {
            $datainicial = $ano . '.01.01';
        }

        if (!$datafinal) {
            $datafinal = date("Y.m.d");
        }

        $sql_filtra_periodo = "AND B.DTPAG BETWEEN '$datainicial' and '$datafinal'";

        $sql_empresa = Helper::filterQueryEmpresaScpi('D', $empresa);

        if ($numero) {
            $sql_filtra_num_empenho = "AND B.NEMPG = $numero";
            $sql_filtra_periodo = "";
        }

        if ($favorecido) {
            $sql_filtra_favorecido_nome = "AND C.NOME LIKE '%$favorecido%'";
            $sql_filtra_periodo = "";
        }

        if ($cnpj) {
            $sql_filtra_favorecido_cnpj = "AND C.INSMF LIKE '%$cnpj%'";
            $sql_filtra_periodo = "";
        }

        if ($elemento) {
            $elemento = implode(',', $elemento);
            $sql_elemento = "AND A.ELEMENTO in($elemento)";
        }

        if ($covid == "true") {
            $sql_covid = "AND V.FILTROPADRAO = 'COVID19'";
            $sql_covid_extra = " OR D.EXTRA='S'";
        }


        $empenhos = DB::connection('scpi' . $ano)->table(DB::raw("(
            SELECT 
            B.NEMPG, B.TPEM, B.PKEMP, B.NUMSUB,
            A.PROC,
            C.NOME,
            C.INSMF,
            B.VAPAG,
            B.DTPAG,
            E.ORDPGSEQ
          FROM VIEWVAPAG_ORDPG('$datainicial', '$datafinal') B
          INNER JOIN DESPES A ON (A.PKEMP = B.PKEMP)
          INNER JOIN DESDIS D ON (D.FICHA = A.FICHA)
          INNER JOIN DESFOR C ON (C.CODIF = A.CODIF)
          INNER JOIN ORDPAG E ON (E.ORDPG = B.ORDPG)
          LEFT JOIN VINCODIGO V ON (V.VINGRUPO = A.VINGRUPO AND V.VINCODIGO = A.VINCODIGO)
          WHERE
            (D.EXTRA = 'N' OR D.BALCO LIKE '321%' $sql_covid_extra)
            $sql_empresa
            $sql_filtra_periodo
            $sql_filtra_num_empenho
            $sql_covid
            $sql_filtra_favorecido_nome
            $sql_filtra_favorecido_cnpj
            $sql_elemento
           ORDER BY B.DTPAG DESC, E.ORDPGSEQ DESC, B.NUMSUB DESC
            ) as subquery")) // Cria uma subconsulta
            ->orderBy('ORDPGSEQ', 'ASC')
            ->orderBy('NEMPG', 'ASC')
            ->paginate(10); // Define o número de itens por página

        $empenhos = Helper::convertingDataSCPI($empenhos, ['NOME'], ['DTPAG']);
        return $empenhos;
    }

    function getElementos($ano = null)
    {
        if (!$ano) {
            $ano = date('Y');
        }

        $elementos = DB::connection('scpi' . $ano)->select("SELECT ELEMENTO, NOME FROM TABELEMENTO ORDER BY ELEMENTO");
        $elementos = Helper::convertingDataSCPI($elementos, ['NOME']);
        return $elementos;
    }
}
