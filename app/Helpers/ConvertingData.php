<?php

namespace App\Helpers;

class ConvertingData
{
    static function convertingData($object, array $fields)
    {
        return $object->map(function ($item) use ($fields) {
            foreach ($fields as $field) {
                if (is_string($item->$field)) {
                    $item->$field = mb_convert_encoding($item->$field, 'UTF-8', 'ISO-8859-1');
                }
            }

            return $item;
        });
    }

    static function convertingDataSCPI($array, array $fields)
    {
        $count = count($array);
        for($i = 0; $i < $count; $i++){
            foreach($fields as $fild){
                $array[$i]->$fild = mb_convert_encoding($array[$i]->$fild, 'UTF-8', 'ISO-8859-1');
            }

            
        }
        return $array;
    }
}