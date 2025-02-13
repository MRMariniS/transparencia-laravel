<?php

namespace App\Repositories;

use App\Interfaces\EntityInterface;
use App\Models\Entity;
use App\Helpers\Helper;
use Dotenv\Parser\Entry;
use InvalidArgumentException;
use PDOException;
use PhpParser\Node\Stmt\Else_;

class EntityEloquentORM implements EntityInterface
{
    function getEntityData()
    {
        $entity = Entity::whereNull('UG')->get([
            'CODCLIENTE',
            'NOME',
            'CNPJ',
            'ENDERECO',
            'CIDADE',
            'UF',
            'CEP',
            'TELEFONE',
            'SITE',
            'EMAIL',
            'HORARIO',
            'GESRESPONSAVEL',
            'GESCARGO',
            'UG'
        ]);

        $entity = Helper::convertingData(
            $entity,
            [
                'NOME','ENDERECO', 'CIDADE', 'HORARIO','GESRESPONSAVEL','GESCARGO'
            ]
        );

        return $entity;
    }

    function getAccountingEntity($ano, $filterTipo)
    {   
        try {

            if ($filterTipo == 1) {
                $sqlug = '';
                session()->put('ENTIDADEROTA', 'executivo');
            } elseif ($filterTipo == 2) {
                $sqlug = 'AND TIPO IN(2)';
                session()->put('ENTIDADEROTA', 'legislativo');
            } elseif ($filterTipo == 8) {
                $sqlug = 'AND TIPO IN(8)';
                session()->put('ENTIDADEROTA', 'previdencia');
            }

            $entityContability = app('db')->connection("scpi$ano")
                ->select("SELECT EMPRESA, NOME, TIPO, CGC, ENDERECO, FONE, CEP, NOME_AUTORID, CARGO_AUTORID FROM TABEMPRESA WHERE MOSTRA_WEB = 'S' $sqlug ORDER BY TIPO");

            if (!array_key_exists(0, $entityContability)) {
                $filterTipo = 1;
                session()->put('ENTIDADEROTA', 'executivo');
                $entityContability = app('db')->connection("scpi$ano")
                    ->select("SELECT EMPRESA, NOME, TIPO, CGC, ENDERECO, FONE, CEP, NOME_AUTORID, CARGO_AUTORID FROM TABEMPRESA WHERE MOSTRA_WEB = 'S' ORDER BY TIPO");
            }

            $entityContability = Helper::convertingDataSCPI($entityContability, [
                'NOME',
                'ENDERECO',
                'NOME_AUTORID',
                'CARGO_AUTORID'
            ]);

            session()->put('UG', $entityContability[0]->EMPRESA);
            session()->put('TIPOEMPRESA', $entityContability[0]->TIPO);
            session()->put('NOMEENTIDADE', "{$entityContability[0]->NOME}");
            
            if ($filterTipo == 1) {
                foreach($entityContability as $entity){
                    if($entity->TIPO == 2){
                        session()->put('UGCAMARA', $entity->EMPRESA);
                    }

                    if($entity->TIPO == 8){
                        session()->put('UGRPPS', $entity->EMPRESA);
                    }
                }
            }

            
            
            return $entityContability;
        } catch (InvalidArgumentException $e) {
            return $e->getMessage();
        }
    }

    function getValores(){
        $valores = Entity::whereNull('UG')->get([
            'GESMISSAO',
            'GESVALORES',
            'GESVISAO',
            'UG'
        ]);

        $valores = Helper::convertingData(
            $valores,
            [
                'GESMISSAO','GESVALORES', 'GESVISAO'
            ]
        );

        return $valores;
    }
}