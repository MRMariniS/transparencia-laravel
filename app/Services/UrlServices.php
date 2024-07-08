<?php

namespace App\Services;

use App\Interfaces\UrlInterface;

class UrlServices
{
    function __construct(
        protected UrlInterface $repository,
    ) {
    }

    function menuTopBar()
    {
        $menuTopBar = $this->repository->getMenuTopBar();
        return $menuTopBar;
    }

    function menuLateral()
    {
        $menuLateral = $this->repository->getMenuLateral();
        return $menuLateral;
    }

    function menuSocial()
    {
        $menuSocial = $this->repository->getMenuSocial();
        return $menuSocial;
    }

    function menuHome()
    {
        $menuHome = $this->repository->getMenuHome();
        return $menuHome;
    }

}