<?php

namespace App\Repositories;

use App\Interfaces\WebServiceInterface;
use App\Models\Publicarqs;
use App\Helpers\Helper;
use Illuminate\Support\Facades\Http;

class EprocWebServices implements WebServiceInterface
{

    private int $portWS;
    private string $serverWS;
    private string $uriWS;
    private string $hostWS;
    private string $uri;


    public function __construct()
    {
        $this->portWS = env('WS_PORTWS');
        $this->uriWS = env('WS_URIWS');
        $this->hostWS = env('WS_SERVERWS');
        $this->uri = "{$this->hostWS}:{$this->portWS}/{$this->uriWS}datasnap/rest/";
    }

    function PublicArqsView(int $idDoc)
    {
        $origem = Publicarqs::where('ID', $idDoc)->first(['ARQUIVO', 'ORIGEM', 'CDDBANEXOS', 'VRDOCTO', 'TIPO', 'NOMEORIGINAL']);
        $cdDbAnexo = $origem->CDDBANEXOS;
        $arquivo = $origem->ARQUIVO;
        $vrDocto = $origem->VRDOCTO;
        $origemDoc = $origem->ORIGEM;
        $tipo = $origem->TIPO;
        $nomeOriginal = mb_convert_encoding($origem->NOMEORIGINAL, 'UTF-8', 'ISO8859-1');


       
        if ($origemDoc == 0 || ($arquivo != null || $arquivo != '')) {
            return ['TIPO' => $tipo, 'ORIGEM' => 0, 'NOME' => $nomeOriginal, 'ARQUIVO' => base64_encode($arquivo)];
        } elseif ($origemDoc == 1) {
            try {
                $response = Http::get($this->uri . "TProtocoloSM/PublicArqsView/$idDoc/$cdDbAnexo");
                $response = json_decode($response);
                if ($response->result[0] == null) {
                    return null;
                } else {
                    return [
                        'TIPO' => $response->result[0]->tipo,
                        'ORIGEM' => 1,
                        'NOME' => $response->result[0]->hash,
                        'ARQUIVO' => $response->result[0]->conteudo,
                        'CDCLIENTE' => $response->result[0]->cdCliente
                    ];
                }
            } catch (\Throwable $th) {
                return null;
            }
            
        } elseif ($origemDoc == 2) {
            try {
                $response = Http::get($this->uri . "TProtocoloSM/DoctoView/$idDoc/$vrDocto");
                if ($response->result[0] == null) {
                    return null;
                } else {
                    return [
                        'TIPO' => $response->result[0]->tipo,
                        'ORIGEM' => 1,
                        'NOME' => $response->result[0]->hash,
                        'ARQUIVO' => $response->result[0]->conteudo,
                        'CDCLIENTE' => $response->result[0]->cdCliente
                    ];
                }
            } catch (\Throwable $th) {
                return null;
            }
        }

    }

}