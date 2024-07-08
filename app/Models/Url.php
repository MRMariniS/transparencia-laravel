<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Url extends Model
{
    protected $table = "URL";
    protected $primaryKey = "CODIGO";

    protected $connection = "transparencia";

    protected $fillable = [
        'CODIGO',
        'ATIVO',
        'APRESENTACAO',
        'TIPOMENU',
        'DEFINICAO',
        'URL',
        'CDGRUPO',
        'COMENTARIOS',
        'RPPS',
        'GLYPH',
        'URLRPPS',
        'UG'
    ];

    public function url_grupo(){
        return $this->belongsTo(UrlGrupo::class,'CDGRUPO', 'CDGRUPO');
    }

    public function subgrupo(){
        $this->hasMany(Subgrupo::class, 'CDMODULO', 'CODIGO')->with('grupo')->with('publicacao');
    }
}
