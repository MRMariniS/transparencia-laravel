<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstruturaTipo extends Model
{
    protected $table = "ESTRUTURA_TIPO";
    protected $primaryKey = "ID";

    protected $fillable = [
        'ID',
        'DESCRICAO',
        'REQUERIDO',
        'RPPS'
    ];

    protected $connection = "transparencia";

}
