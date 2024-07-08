<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntidadesContabeis extends Model
{
    protected $table = "TABEMPRESA";

    protected $primaryKey = "EMPRESA";

    protected $connection = "scpi2023";
}
