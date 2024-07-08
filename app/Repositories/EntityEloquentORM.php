<?php

namespace App\Repositories;

use App\Interfaces\EntityInterface;
use App\Models\Entity;
use App\Services\ConvertingData;
use InvalidArgumentException;
use PDOException;

class EntityEloquentORM implements EntityInterface
{
    function getEntityData()
    {
        $entity = Entity::all([
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

        $entity = ConvertingData::convertingData(
            $entity,
            [
                'NOME',
                'ENDERECO',
                'CIDADE',
                'HORARIO',
                'GESRESPONSAVEL',
                'GESCARGO'
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
                session()->put('ENTIDADEROTA', 'prefeitura');
                $entityContability = app('db')->connection("scpi$ano")
                    ->select("SELECT EMPRESA, NOME, TIPO, CGC, ENDERECO, FONE, CEP, NOME_AUTORID, CARGO_AUTORID FROM TABEMPRESA WHERE MOSTRA_WEB = 'S' AND TIPO IN(1,2,8) ORDER BY TIPO");
            }

            session()->put('UG', "{$entityContability[0]->EMPRESA}");
            session()->put('TIPOEMPRESA', "{$entityContability[0]->TIPO}");
            session()->put('NOMEENTIDADE', "{$entityContability[0]->EMPRESA} - {$entityContability[0]->NOME}");

            $entityContability = ConvertingData::convertingDataSCPI($entityContability, [
                'NOME',
                'ENDERECO',
                'NOME_AUTORID',
                'CARGO_AUTORID'
            ]);


            if ($filterTipo == 1) {
                if (array_key_exists(1, $entityContability)) {
                    session()->put('UGCAMARA', "{$entityContability[1]->EMPRESA}");
                } else {
                    session()->put('UGCAMARA', '-1');
                }

                if (array_key_exists(2, $entityContability)) {
                    session()->put('UGRPPS', "{$entityContability[2]->EMPRESA}");
                } else {
                    session()->put('UGRPPS', '-1');
                }
            }

            return $entityContability;
        } catch (InvalidArgumentException $e) {
            return $e->getMessage();
        }
    }
}