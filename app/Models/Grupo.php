<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grupo extends Model
{
    protected $table = 'GRUPO';

    protected $primaryKey = 'GRUPO';
    protected $connection = "transparencia";

    protected $fillable = [
        'GRUPO',
        'DESCRICAO',
        'DEFINICAO',
        'URL',
        'PUBLICADO',
        'GLYPH',
        'CORPO'
    ];

    public function subgrupo_grupo(){
        return $this->hasMany(SubGrupo::class, 'GRUPO', 'GRUPO');
    }

    public function publicacao_grupo(){
        return $this->hasMany(Publicacao::class, 'GRUPO', 'GRUPO')->with('documentos');
    }
}
