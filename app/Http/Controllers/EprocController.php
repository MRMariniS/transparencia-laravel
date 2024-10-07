<?php

namespace App\Http\Controllers;

use App\Services\EprocServices;
use ErrorException;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Exceptions;
use Inertia\Inertia;
use Throwable;

class EprocController extends Controller
{
    function __construct(
        protected EprocServices $webservices,
    ) {}

    function PublicArqsView(int $idDoc)
    {
        $doc = $this->webservices->PublicArqsView($idDoc);
        if ($doc) {
            $tipo = $doc['TIPO'];
            $arquivo = base64_decode($doc['ARQUIVO']);
            $nome = $doc['NOME'];

            if ($tipo == 'PDF') {
                return response($arquivo)
                    ->withHeaders([
                        'Content-Type' => 'application/pdf',
                        'Content-Disposition' => 'inline; filename="' . $nome . '"'
                    ]);
            }
        }else{
            return back()->withErrors(["mensagem" => "Documento não existe ou indisponível"]);
        }
    }
}
