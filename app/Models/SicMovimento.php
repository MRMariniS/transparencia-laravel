<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SicMovimento extends Model
{
    protected $table = 'SIC_MOVIMENTO';

    function pedido(){
        return $this->hasOne(SicPedido::class, 'ID', 'ID_PEDIDO');
    }

    function documento_publicacao(){
        return $this->hasOne(Publicacao::class, 'ID', 'ID_PUBLICACAO')->with('documentos');
    }
}
