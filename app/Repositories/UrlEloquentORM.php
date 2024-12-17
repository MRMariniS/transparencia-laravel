<?php

namespace App\Repositories;

use App\Interfaces\UrlInterface;
use App\Models\UrlGrupo;
use App\Helpers\Helper;
use App\Models\Url;

class UrlEloquentORM implements UrlInterface
{
    function getMenuTopBar()
    {
        $menuSuperior = Url::where('ATIVO', 'S')->where('TIPOMENU', 'SUPERIOR')
            ->where(function ($query) {
                Helper::filterQueryUg($query,null,'RPPS','S');
            })
            ->get(['CODIGO', 'APRESENTACAO', 'URL']);
        $menuSuperior = Helper::convertingData($menuSuperior, ['APRESENTACAO']);

        return $menuSuperior;
    }

    function getMenuLateral()
    {
        $menuLateral = UrlGrupo::with([
            'submenu' => function ($query) {
                $query->select('CODIGO', 'APRESENTACAO', 'DEFINICAO', 'URL', 'CDGRUPO', 'GLYPH', 'UG')
                    ->where(function ($query) {
                        Helper::filterQueryUg($query,null,'RPPS','S');
                    });
            }
        ])
            ->orderBy('ORDEM', 'ASC')
            ->get(['CODIGO', 'APRESENTACAO', 'GLYPH']);

        $menuLateral = Helper::convertingData(
            $menuLateral,
            [
                'APRESENTACAO'
            ]
        );

        foreach ($menuLateral as $item) {
            $item->submenu = Helper::convertingData(
                $item->submenu,
                [
                    'APRESENTACAO',
                    'DEFINICAO',
                    'COMENTARIOS',
                    'URL'
                ]
            );
        }

        return $menuLateral;
    }

    function getMenuHome()
    {
        $menuHome = Url::where('ATIVO', 'S')->where('TIPOMENU', 'HOME')
            ->where(function ($query) {
                Helper::filterQueryUg($query,null,'RPPS','S');
            })
            ->get(['CODIGO', 'APRESENTACAO', 'URL', 'UG', 'GLYPH']);
        $menuHome = Helper::convertingData($menuHome, ['APRESENTACAO']);
        return $menuHome;
    }

    function getMenuSocial()
    {
        $menuSocial = Url::where('ATIVO', 'S')->where('TIPOMENU', 'SOCIAL')
            ->where(function ($query) {
                Helper::filterQueryUg($query,null,'RPPS','S');
            })
            ->get(['CODIGO', 'APRESENTACAO', 'URL', 'GLYPH']);
        $menuSocial = Helper::convertingData($menuSocial, ['APRESENTACAO']);
        return $menuSocial;
    }
}
