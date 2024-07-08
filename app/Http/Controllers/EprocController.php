<?php

namespace App\Http\Controllers;

use App\Services\EprocServices;
use Illuminate\Http\Request;

class EprocController extends Controller
{
    function __construct(
        protected EprocServices $webservices,
    ) {
    }

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
        } else {
            return redirect(session()->get('ENTIDADEROTA') . '/error');
        }
    }
}
