<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubGrupo extends Model
{
    protected $table = 'SUBGRUPO';

    protected $primaryKey = 'SUBGRUPO';

    protected $connection = "transparencia";

    protected $fillable = [
        'GRUPO',
        'SUBGRUPO',
        'DESCRICAO',
        'DEFINICAO',
        'URL',
        'PUBLICADO',
        'GLYPH',
        'RPPS',
        'REQUERIDO',
        'CDMODULO'
    ];

    public $timestamps = false;

    function grupo_subgrupo()
    {
        return $this->hasOne(Grupo::class, 'GRUPO', 'GRUPO');
    }

    function publicacao_subgrupo()
    {
        $this->hasMany(Publicacao::class, 'SUBGRUPO', 'SUBGRUPO')->with('documentos');
    }


}
