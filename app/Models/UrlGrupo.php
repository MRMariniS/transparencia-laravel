<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UrlGrupo extends Model
{
    protected $table = "URL_GRUPO";
    protected $primaryKey = "CODIGO";

    protected $connection = "transparencia";

    protected $fillable = [
        'CODIGO',
        'ATIVO',
        'APRESENTACAO',
        'TIPOMENU',
        'DEFINICAO',
        'ORDEM',
        'GLYPH'
    ];

    public function submenu()
    {
        return $this->hasMany(Url::class, 'CDGRUPO', 'CODIGO');
    }
}
