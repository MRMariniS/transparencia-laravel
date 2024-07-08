<?php

namespace App\Repositories;

use App\Interfaces\UrlInterface;
use App\Models\UrlGrupo;
use App\Services\ConvertingData;
use HarryGulliford\Firebird\Query\Builder;
use Illuminate\Database\Eloquent\Collection;
use App\Models\Url;
use stdClass;

class UrlEloquentORM implements UrlInterface
{
    function getMenuTopBar()
    {
        $menuSuperior = Url::where('ATIVO', 'S')->where('TIPOMENU', 'SUPERIOR')
            ->where(function ($query) {
                if (session()->get('TIPOEMPRESA') == 1) {
                    $query->whereNotIn('UG', [session()->get('UGCAMARA'), session()->get('UGRPPS')])
                        ->orWhereNull("UG");
                } else {
                    $query->where('UG', session()->get('UG'))->orWhereNull("UG");
                }
            })
            ->get(['CODIGO', 'APRESENTACAO', 'URL']);
        $menuSuperior = ConvertingData::convertingData($menuSuperior, ['APRESENTACAO']);

        return $menuSuperior;
    }
    //In ? [1,NULL] : [session()->get('UG')]);
    function getMenuLateral()
    {
        $menuLateral = UrlGrupo::with([
            'submenu' => function ($query) {
                $query->select('CODIGO', 'APRESENTACAO', 'DEFINICAO', 'URL', 'CDGRUPO', 'GLYPH', 'UG')
                    ->where(function ($query) {
                        if (session()->get('TIPOEMPRESA') == 1) {
                            $query->whereNotIn('UG', [session()->get('UGCAMARA'), session()->get('UGRPPS')])
                                ->orWhereNull("UG");
                        } else {
                            $query->where('UG', session()->get('UG'))->orWhereNull("UG");
                        }
                    });
            }
        ])
            ->orderBy('ORDEM', 'ASC')
            ->get(['CODIGO', 'APRESENTACAO', 'GLYPH']);

        $menuLateral = ConvertingData::convertingData(
            $menuLateral,
            [
                'APRESENTACAO'
            ]
        );

        foreach ($menuLateral as $item) {
            foreach ($item->submenu as $submenu) {
                if (strpos($submenu->URL, 'http') !== 0) {
                    $submenuitem = explode('&', $submenu->URL);
                    $submenu->URL = str_replace('/', '-', str_replace('index.php?link=', '', $submenuitem[0]));
                    $submenu->ENTIDADEROTA = session()->get('ENTIDADEROTA');
                    unset($submenuitem);
                }
            }
            $item->submenu = ConvertingData::convertingData(
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
                if (session()->get('TIPOEMPRESA') == 1) {
                    $query->whereNotIn('UG', [session()->get('UGCAMARA'), session()->get('UGRPPS')])
                        ->orWhereNull("UG");
                } else {
                    $query->where('UG', session()->get('UG'))->orWhereNull("UG");
                }
            })
            ->get(['CODIGO', 'APRESENTACAO', 'URL', 'UG', 'GLYPH']);
        $menuHome = ConvertingData::convertingData($menuHome, ['APRESENTACAO']);
        return $menuHome;
    }

    function getMenuSocial()
    {
        $menuSocial = Url::where('ATIVO', 'S')->where('TIPOMENU', 'SOCIAL')
            ->where(function ($query) {
                if (session()->get('TIPOEMPRESA') == 1) {
                    $query->whereNotIn('UG', [session()->get('UGCAMARA'), session()->get('UGRPPS')])
                        ->orWhereNull("UG");
                } else {
                    $query->where('UG', session()->get('UG'))->orWhereNull("UG");
                }
            })
            ->get(['CODIGO', 'APRESENTACAO', 'URL', 'GLYPH']);
        $menuSocial = ConvertingData::convertingData($menuSocial, ['APRESENTACAO']);
        return $menuSocial;
    }
}