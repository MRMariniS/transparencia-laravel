<?php

namespace App\Helpers;

class ConvertingData
{
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
    }
}
