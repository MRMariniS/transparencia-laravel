<?php

namespace App\Helpers;

use Illuminate\Database\QueryException;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use InvalidArgumentException;
use Symfony\Component\Console\Input\Input;

class Helper
{
    /**
     * @param table query será TABLE.UG
     * 
     */
    static function filterQueryUg($query, $table = null, $nameColumnRpps = null, $acceptUgCMNull = 'N')
    {
        $column = 'UG';
        $columnRpps = $nameColumnRpps;
        if ($table) {
            $column = $table . '.UG';
            if ($columnRpps) {
                $columnRpps = $table . ".$columnRpps";
            }
        }
        if (session()->get('TIPOEMPRESA') == 1) {
            $query->whereNotIn($column, [session()->get('UGCAMARA'), session()->has('UGRPPS') ? session()->get('UGRPPS') : -1])
                ->orWhereNull($column);
        } else if (session()->get('TIPOEMPRESA') == 8) {
            $query->where($column, session()->get("UG"))->orWhere(function ($subquery) use ($columnRpps) {
                if ($columnRpps) {
                    $subquery->where($columnRpps, 'S');
                }
            });
        } else {
            if ($acceptUgCMNull == 'S') {
                $query->where($column, session()->get("UG"))->orWhereNull($column);
            } else {
                $query->where($column, session()->get("UG"));
            }
        }
        return $query;
    }

    static function filterQueryEmpresaScpi($alias, $empresa = [])
    {

        $query = "AND ($alias.EMPRESA=" . session()->get('UG') . ")";

        if ($empresa) {
            $empresa = implode(',', $empresa);
            $query = "AND ($alias.EMPRESA in(" . $empresa . "))";
        }

        return $query;
    }

    static function filterQueryTipoEmpresaScpi()
    {
        if (session()->get('TIPOEMPRESA') == 1) {
            $sqlug = 'AND TIPO NOT IN(2)';
        } elseif (session()->get('TIPOEMPRESA') == 2) {
            $sqlug = 'AND TIPO IN(2)';
        } elseif (session()->get('TIPOEMPRESA') == 8) {
            $sqlug = 'AND TIPO IN(8)';
        }

        return $sqlug;
    }

    static function filterPedido($query, $tipo)
    {
        if ($tipo == "coletivo")
            return $query->where('COLETIVO', 'S');
        if ($tipo == "desclassificados")
            return $query->where('STATUS', 'Indeferido');
    }

    static function convertingData($object, array $fields, array $fieldsDate = [], array $fieldMoney = [])
    {
        $countFieldDate = count($fieldsDate);
        $countFildMoney = count($fieldMoney);

        $object->map(function ($item) use ($fields, $fieldsDate, $fieldMoney, $countFieldDate, $countFildMoney) {
            foreach ($fields as $field) {
                $item->$field = mb_convert_encoding($item->$field, 'UTF-8', 'ISO-8859-1');
            }

            if ($countFieldDate > 0) {
                foreach ($fieldsDate as $field) {
                    $item->$field = date('d/m/Y', strtotime($item->$field));
                }
            }

            if ($countFildMoney > 0) {
                foreach ($fieldMoney as $field) {
                    $item->$field = $item->$field !== 0 ? number_format($item->$field, 2, ',', '.') : '0,00';
                }
            }
        });

        return $object;
    }

    static function convertingDataSCPI($array, array $fields, array $fieldsDate = [], array $fieldMoney = [])
    {
        $count = count($array);
        $countFieldDate = count($fieldsDate);
        $countFildMoney = count($fieldMoney);

        for ($i = 0; $i < $count; $i++) {
            foreach ($fields as $field) {
                $array[$i]->$field = mb_convert_encoding($array[$i]->$field, 'UTF-8', 'ISO-8859-1');
            }

            if ($countFieldDate > 0) {
                foreach ($fieldsDate as $field) {
                    $array[$i]->$field = date('d/m/Y', strtotime($array[$i]->$field));
                }
            }

            if ($countFildMoney > 0) {
                foreach ($fieldMoney as $field) {
                    $array[$i]->$field = $array[$i]->$field !== 0 ? number_format($array[$i]->$field, 2, ',', '.') : '0,00';
                }
            }
        }
        return $array;
    }

    static function convertingDataHasOne($object, array $fields, array $fieldsDate = [], array $fieldMoney = [])
    {
        $countFieldDate = count($fieldsDate);
        $countFildMoney = count($fieldMoney);

        foreach ($fields as $field) {
            $object->$field = mb_convert_encoding($object->$field, 'UTF-8', 'ISO-8859-1');
        }

        if ($countFieldDate > 0) {
            foreach ($fieldsDate as $field) {
                $object->$field = date('d/m/Y', strtotime($object->$field));
            }
        }

        if ($countFildMoney > 0) {
            foreach ($fieldMoney as $field) {
                $object->$field = $object->$field !== 0 ? number_format($object->$field, 2, ',', '.') : '0,00';
            }
        }

        return $object;
    }

    static function verificaConnectionBdExercicio($exercicio)
    {
        try {
            DB::connection('scpi' . $exercicio)->getPdo();
            return $exercicio;
        } catch (QueryException | InvalidArgumentException $e) {
            return session()->get('ULTIMOANOATIVO');
        }
    }
}
