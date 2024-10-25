<?php

namespace App\Helpers;

use Illuminate\Database\QueryException;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\DB;
use InvalidArgumentException;
use Symfony\Component\Console\Input\Input;

class Helper
{
    static function filterQueryUg($query)
    {
        if (session()->get('TIPOEMPRESA') == 1) {
            $query->whereNotIn('UG', [session()->get('UGCAMARA'), session()->get('UGRPPS')])
                ->orWhereNull("UG");
        } else {
            $query->where('UG', session()->get('UG'))->orWhereNull("UG");
        }
        return $query;
    }

    static function filterQueryEmpresaScpi($alias, $empresa = '')
    {
        
        $query = "AND ($alias.EMPRESA=" . session()->get('UG') . ")";

        if ($empresa) {
            $query = "AND ($alias.EMPRESA=" . $empresa . ")";
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

    static function convertingData($object, array $fields, array $fieldsDate = [])
    {
        $countFieldDate = count($fieldsDate);

        $object->map(function ($item) use ($fields, $fieldsDate, $countFieldDate) {
            foreach ($fields as $field) {
                $item->$field = mb_convert_encoding($item->$field, 'UTF-8', 'ISO-8859-1');
            }

            if ($countFieldDate > 0) {
                foreach ($fieldsDate as $field) {
                    $item->$field = date('d/m/Y', strtotime($item->$field));
                }
            }
        });

        return $object;
    }

    static function convertingDataSCPI($array, array $fields, array $fieldsDate = [])
    {
        $count = count($array);
        $countFieldDate = count($fieldsDate);

        for ($i = 0; $i < $count; $i++) {
            foreach ($fields as $field) {
                $array[$i]->$field = mb_convert_encoding($array[$i]->$field, 'UTF-8', 'ISO-8859-1');
            }

            if ($countFieldDate > 0) {
                foreach ($fieldsDate as $field) {
                    $array[$i]->$field = date('d/m/Y', strtotime($array[$i]->$field));
                }
            }
        }
        return $array;
    }

    static function convertingDataHasOne($object, array $fields, array $fieldsDate = [])
    {
        $countFieldDate = count($fieldsDate);
        foreach ($fields as $field) {
            $object->$field = mb_convert_encoding($object->$field, 'UTF-8', 'ISO-8859-1');
        }

        if ($countFieldDate > 0) {
            foreach ($fieldsDate as $field) {
                $object->$field = date('d/m/Y', strtotime($object->$field));
            }
        }

        return $object;
    }

    static function verificaConnectionBdExercicio($exercicio){
          try{
            DB::connection('scpi'.$exercicio)->getPdo();
            return $exercicio;
          }catch(QueryException | InvalidArgumentException $e){
            return session()->get('ULTIMOANOATIVO');
          }
           
    }
}
