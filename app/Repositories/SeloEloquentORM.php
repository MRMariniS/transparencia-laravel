<?php

namespace App\Repositories;

use App\Interfaces\SeloInterface;
use App\Models\Selo;

class SeloEloquentORM implements SeloInterface
{
    function getImagemSelo()
    {
        $selo = Selo::where('MOSTRAR', 'S')
            ->where(function ($query) {
                if (session()->get('TIPOEMPRESA') == 1) {
                    $query->whereNotIn('UG', [session()->get('UGCAMARA'), session()->get('UGRPPS')])
                        ->orWhereNull("UG");
                } else {
                    $query->where('UG', session()->get('UG'))->orWhereNull("UG");
                }
            })
            ->limit(1)
            ->get(['GLYPH', 'UG']);

        return $selo;
    }
}