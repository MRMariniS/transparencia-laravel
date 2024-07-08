<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercicio extends Model
{
    protected $table = "EXERCICIO";
    protected $primaryKey = "ANO";

    protected $connection = "transparencia";

    protected $fillable = [
        'ANO',
        'ATIVO'
    ];
}
