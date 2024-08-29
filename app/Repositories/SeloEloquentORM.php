<?php

namespace App\Repositories;

use App\Helpers\Helper;
use App\Interfaces\SeloInterface;
use App\Models\Selo;

class SeloEloquentORM implements SeloInterface
{
    function getImagemSelo()
    {
        $selo = Selo::where('MOSTRAR', 'S')
            ->where(function($query){Helper::filterQueryUg($query);})
            ->limit(1)
            ->get(['GLYPH', 'UG']);

        return $selo;
    }
}