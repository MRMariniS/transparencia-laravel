<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Selo extends Model
{
    protected $table = "SELO";
    protected $primaryKey = "UG";

    protected $connection = "transparencia";

    protected $fillable = [
        'UG',
        'DTAVALIACAO',
        'NOTAOBTIDA',
        'PROCESSOTCE',
        'MOSTRAR',
        'DTINICIO',
        'DTFIM',
        'GLYPH'
    ];
}
