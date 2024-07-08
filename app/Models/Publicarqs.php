<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publicarqs extends Model
{
    protected $table = 'PUBLICARQS';

    protected $primaryKey = 'ID';

    protected $connection = "transparencia";

    protected $fillable = [
        'ID',
        'PUBLICACAO',
        'DESCRICAO',
        'TIPO',
        'NOMEARQUIVO',
        'NOMEORIGINAL',
        'PUBLICADO',
        'DTHRPUBLICADO',
        'NMUSUARIO',
        'QTACESSOS',
        'DTULTACESSO',
        'ARQUIVO',
        'HASHARQ',
        'LIMITE',
        'DTHRLIMITE',
        'MOTIVOLIMITE',
        'ORIGEM',
        'CDDBANEXOS',
        'CDDOCTO',
        'VRDOCTO',
    ];

    public $timestamps = false;
}
