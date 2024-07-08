<?php

namespace App\Services;

use App\Interfaces\EntityInterface;



class EntityServices
{
    function __construct(
        protected EntityInterface $repository,
    ) {
    }

    function getEntity()
    {
        $entity = $this->repository->getEntityData();
        return $entity;
    }

    function getAccountingEntity($ano, $tipo)
    {
        if (!isset($ano)) {
            $ano = date('Y');
        }
        
        if ($tipo == 'LEGISLATIVO') {
            $filterTipo = 2;
        } elseif ($tipo == 'PREVIDENCIA') {
            $filterTipo = 8;
        } else {
            $tipo = 'EXECUTIVO';
            $filterTipo = 1;
        }

        $accountingEntity = $this->repository->getAccountingEntity($ano, $filterTipo);
        return $accountingEntity;
    }

}