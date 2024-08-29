<?php

namespace App\Helpers;

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
}