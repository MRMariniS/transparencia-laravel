<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estrutura extends Model
{
    protected $table = "ESTRUTURA";
    protected $primaryKey = "CODIGO";

    protected $connection = "transparencia";

    protected $fillable = [
        'CODIGO',
        'DESCRICAO',
        'TIPO',
        'ATRIBUICOES',
        'GLYPH',
        'ENDERECO',
        'HORARIO',
        'TELEFONES',
        'SITE',
        'EMAIL',
        'RESPONSAVEL',
        'CARGO',
        'ATONOMEACAO',
        'FORMACAO',
        'EXPERIENCIA',
        'PUBLICADO',
        'RPPS',
        'PEDIDO_SIC',
        'PEDIDO_OUV',
        'COMPOSICAO',
        'GRUPO',
        'SUBGRUPO',
        'UG'
    ];

    function tipo_estrutura(){
        return $this->hasOne(EstruturaTipo::class, 'ID', 'TIPO');
    }
}
