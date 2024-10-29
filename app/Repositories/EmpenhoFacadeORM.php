<?php

namespace App\Repositories;

use App\Helpers\Helper;
use App\Interfaces\EmpenhoInterface;
use DateTime;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\DB;

class EmpenhoFacadeORM implements EmpenhoInterface
{

    function getEmpenhos($ano = null, $empresa = null, $numero = null, $cnpj = null, $favorecido = null, $elemento = null, $covid = null, $datainicial = null, $datafinal = null)
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
            // Calcula a data de 6 meses atrás a partir da data atual
            $dataAtras = strtotime('-1 months');
            // Formata a data em 'Y-m-d'
            $datainicial = date($ano . '.m.d', $dataAtras);
        }

        if (!$datafinal) {
            $datafinal = date("Y.m.d");
        }

        $sql_filtra_periodo = "AND A.DATAE BETWEEN '$datainicial' and '$datafinal'";


        if ($covid) {
            $sql_covid = "AND V.FILTROPADRAO = 'COVID19'";
        }

        $sql_empresa = Helper::filterQueryEmpresaScpi('D', $empresa);

        if ($numero) {
            $sql_filtra_num_empenho = "AND A.NEMPG = $numero";
            $sql_filtra_periodo = "";
        }

        if ($favorecido) {
            $sql_filtra_favorecido_nome = "AND C.NOME LIKE '$favorecido%'";
            $sql_filtra_periodo = "";
        }

        if ($cnpj) {
            $sql_filtra_favorecido_cnpj = "AND C.INSMF='$cnpj'";
            $sql_filtra_periodo = "";
        }

        if ($elemento) {
            $sql_elemento = "AND A.ELEMENTO = '$elemento'";
        }

        if ($covid) {
            $sql_covid = "AND V.FILTROPADRAO = 'COVID19'";
            $sql_covid_extra = " OR D.EXTRA='S'";
        }


        $empenhos = DB::connection('scpi' . $ano)->table(DB::raw("(
            SELECT
            A.PKEMP, A.NEMPG, 
            CASE WHEN D.EXTRA = 'N' THEN A.TPEM ELSE A.TPEM_RESTO END AS TPEM,
            CAST(A.DATAE AS DATE) AS DTEMPENHO,
            A.PROC,
            C.NOME, C.INSMF,
            EXTRACT(YEAR FROM A.DATAE) AS ANO_EMPENHO,
            SUM(COALESCE(B.VADEM, 0)) AS EMPENHADO,
            SUM(COALESCE(B.VALIQ, 0)) AS LIQUIDADO,
            SUM(COALESCE(B.VALIQ, 0)) AS PAGO
          FROM DESPES A
          INNER JOIN DESDIS D ON (D.FICHA = A.FICHA)
          INNER JOIN DESFOR C ON (C.CODIF = A.CODIF)
          LEFT JOIN VINCODIGO V ON (V.VINGRUPO = A.VINGRUPO AND V.VINCODIGO = A.VINCODIGO)
          LEFT JOIN  CALCULA_SITUACAO_EMPENHO('$datafinal', A.PKEMP) B ON (1=1)
          WHERE
            (D.EXTRA = 'N' OR D.BALCO LIKE '321%' $sql_covid_extra)
            $sql_empresa
            $sql_filtra_periodo
            $sql_filtra_num_empenho
            $sql_covid
            $sql_filtra_favorecido_nome
            $sql_filtra_favorecido_cnpj
            $sql_elemento
          GROUP BY 1, 2, 3, 4, 5, 6, 7, 8
          HAVING ((SUM(COALESCE(B.VADEM, 0)) <> 0.00) OR (SUM(COALESCE(B.VALIQ, 0)) <> 0.00) OR (SUM(COALESCE(B.VALIQ, 0)) <> 0.00))
          ORDER BY 5 ASC, 2 ASC
            ) as subquery")) // Cria uma subconsulta
            ->orderBy('DTEMPENHO', 'ASC')
            ->orderBy('NEMPG', 'ASC')
            ->paginate(10); // Define o número de itens por página

        $empenhos = Helper::convertingDataSCPI($empenhos, ['PROC', 'NOME']);
        return $empenhos;
    }

    function getElementos($ano = null)
    {
        if(!$ano){
            $ano = date('Y');
        }
        
        $elementos = DB::connection('scpi'.$ano)->select("SELECT ELEMENTO, NOME FROM TABELEMENTO ORDER BY ELEMENTO");
        $elementos = Helper::convertingDataSCPI($elementos,['NOME']);
        return $elementos;
    }
}
