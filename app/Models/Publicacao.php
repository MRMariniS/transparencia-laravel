<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publicacao extends Model
{
    protected $table = 'PUBLICACAO';

    protected $primaryKey = 'ID';

    protected $connection = "transparencia";

    protected $fillable = [
        'ID',
        'GRUPO',
        'SUBGRUPO',
        'NUMERO ',
        'ANO',
        'DATA',
        'DESCRICAO',
        'EMENTA',
        'PUBLICADO',
        'DTHRPUBLICADO',
        'NMUSUARIO',
        'QTACESSOS',
        'DTULTACESSO',
        'EMENTAHTML',
        'PALAVRASCHAVE',
        'PROTOCOLO',
        'CORPOHTML',
        'CONSOLIDACAO',
        'RPPS',
        'ATUALIZADA',
        'QTATUALIZACAO',
        'UG',
        'DTHRLIMITE',
        'MOTIVOLIMITE',
        'DEPARA',
        'CNPJ'
    ];

    public $timestamps = false;

    function documentos()
    {
        return $this->hasMany(Publicarqs::class, 'PUBLICACAO', 'ID')->select([
            'ID',
            'PUBLICACAO',
            'TIPO',
            'DESCRICAO',
            'DTHRPUBLICADO',
            'QTACESSOS'
        ]);
    }

    function subgrupo()
    {
       return $this->hasOne(SubGrupo::class, 'SUBGRUPO', 'SUBGRUPO');
    }
}
