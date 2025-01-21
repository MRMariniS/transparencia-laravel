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
        } elseif ($tipo == 'EXECUTIVO') {
            $filterTipo = 1;
        }else{
            if(session()->has('TIPOEMPRESA')){
               $filterTipo = session()->get('TIPOEMPRESA');
            }else{
               $filterTipo = 1;
            }
        }
        
        if(!session()->has('EMPRESAS') || session()->get('TIPOEMPRESA') != $filterTipo){
            session()->flush();
            $accountingEntity = $this->repository->getAccountingEntity($ano, $filterTipo);
            session()->put('EMPRESAS', $accountingEntity);
        }else{
             $accountingEntity = session()->get('EMPRESAS');
        }

        
            
        return $accountingEntity;
    }

    function getValores(){
        $valores = $this->repository->getValores();
        return $valores;
    }

}