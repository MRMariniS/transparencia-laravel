<?php

namespace App\Interfaces;

interface EntityInterface
{
    function getEntityData();

    function getAccountingEntity($ano, $filterUg);

    function getValores();
}