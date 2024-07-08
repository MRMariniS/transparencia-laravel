<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SicPedido extends Model
{
    protected $table = 'SIC_PEDIDO';
    protected $primaryKey = 'ID';

    protected $connection = 'transparencia';

    protected $fillable = [
        'ID',
        'PROTOCOLO',
        'DTHRPEDIDO',
        'CPF',
        'DTNASCIMENTO',
        'NOME',
        'EMAIL',
        'TELEFONE',
        'OBJETIVO',
        'PEDIDO',
        'PRIORIDADE',
        'STATUS',
        'DTHRSTATUS',
        'COLETIVO',
        'TIPO',
        'RPPS',
        'PRORROGADO',
        'DTHRPRORROGADO',
        'AVALIADO',
        'AVALIACAO',
        'CDESTRUTURA',
        'CDESTRUTURAATUAL',
        'UG',
        'ANONIMO'
    ];

    public $timestamps = false;
}
