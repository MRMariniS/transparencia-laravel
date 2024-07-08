<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entity extends Model
{
    protected $table = "ENTIDADE";
    protected $primaryKey = "CODCLIENTE";

    protected $connection = "transparencia";
}
