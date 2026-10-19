<?php

declare(strict_types=1);

/*
 * This file is part of Contao Theme SAC Pilatus.
 *
 * (c) Marko Cupic <m.cupic@gmx.ch>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/markocupic/contao-theme-sac-pilatus
 */

use Contao\CoreBundle\DataContainer\PaletteManipulator;
use Markocupic\ContaoThemeSacPilatus\Twig\Extension\ThemeModeExtension;

// Hell/Dunkel: Einstellung im Startpunkt der Webseite
PaletteManipulator::create()
    ->addLegend('sacp_theme_legend', 'layout_legend', PaletteManipulator::POSITION_AFTER)
    ->addField('sacpThemeMode', 'sacp_theme_legend', PaletteManipulator::POSITION_APPEND)
    ->applyToPalette('root', 'tl_page')
    ->applyToPalette('rootfallback', 'tl_page')
;

$GLOBALS['TL_DCA']['tl_page']['fields']['sacpThemeMode'] = [
    'inputType' => 'select',
    'options'   => ThemeModeExtension::MODES,
    'reference' => &$GLOBALS['TL_LANG']['tl_page']['sacpThemeModeOptions'],
    'eval'      => ['tl_class' => 'w50'],
    'sql'       => "varchar(8) NOT NULL default '".ThemeModeExtension::MODE_TOGGLE."'",
];
