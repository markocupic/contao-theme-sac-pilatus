<?php

/**
 * SAC Event Tool Web Plugin for Contao
 * Copyright (c) 2008-2017 Marko Cupic
 * @package sac-event-tool-bundle
 * @author Marko Cupic m.cupic@gmx.ch, 2017-2018
 * @link https://sac-kurse.kletterkader.com
 */


$GLOBALS['TL_DCA']['tl_cabanne_sac'] = array
(

    'config' => array
    (
        'dataContainer'    => 'Table',
        'doNotCopyRecords' => true,
        'enableVersioning' => true,
        'switchToEdit'     => true,
        'sql'              => array
        (
            'keys' => array
            (
                'id' => 'primary',
            ),
        ),
    ),

    'list'     => array
    (
        'sorting'           => array
        (
            'mode'        => 2,
            'fields'      => array('name ASC'),
            'flag'        => 1,
            'panelLayout' => 'filter;sort,search,limit',
        ),
        'label'             => array
        (
            'fields'      => array('name'),
            'showColumns' => true,
        ),
        'global_operations' => array
        (
            'all' => array
            (
                'label'      => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'       => 'act=select',
                'class'      => 'header_edit_all',
                'attributes' => 'onclick="Backend.getScrollOffset();"',
            ),
        ),
        'operations'        => array
        (
            'edit'   => array
            (
                'label' => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['edit'],
                'href'  => 'act=edit',
                'icon'  => 'edit.gif',
            ),
            'copy'   => array
            (
                'label' => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['copy'],
                'href'  => 'act=copy',
                'icon'  => 'copy.gif',
            ),
            'delete' => array
            (
                'label'      => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['delete'],
                'href'       => 'act=delete',
                'icon'       => 'delete.gif',
                'attributes' => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"',
            ),
            'show'   => array
            (
                'label' => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['show'],
                'href'  => 'act=show',
                'icon'  => 'show.svg',
            ),
        ),
    ),
    'palettes' => array
    (
        'default' => '{contact_legend},name,canton,altitude,huettenwart,phone,email,url;{image_legend},singleSRC;{details_legend},huettenchef,capacity,coordsCH1903,coordsWGS84,geoadminlink,openingTime',
    ),

    'fields' => array
    (
        'id'           => array
        (
            'sql' => "int(10) unsigned NOT NULL auto_increment",
        ),
        'tstamp'       => array
        (
            'sql' => "int(10) unsigned NOT NULL default '0'",
        ),
        'name'         => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['name'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'text',
            'eval'      => array('mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'canton'       => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['canton'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'text',
            'eval'      => array('mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'altitude'     => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['altitude'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'text',
            'eval'      => array('rgxp' => 'natural', 'mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'huettenwart'  => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['huettenwart'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'textarea',
            'eval'      => array('rgxp' => '', 'mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'phone'        => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['contact'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'text',
            'eval'      => array('rgxp' => 'phone', 'mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'email'        => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['email'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'text',
            'eval'      => array('rgxp' => 'email', 'mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'url'          => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['url'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'text',
            'eval'      => array('rgxp' => 'url', 'mandatory' => false, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'singleSRC'  => array
        (
            'label'                   => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['singleSRC'],
            'exclude'                 => true,
            'inputType'               => 'fileTree',
            'eval'                    => array('fieldType'=>'radio', 'filesOnly'=>true, 'extensions'=>Config::get('validImageTypes'), 'mandatory'=>true),
            'sql'                     => "binary(16) NULL"
        ),
        'huettenchef'  => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['huettenwart'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'textarea',
            'eval'      => array('mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'capacity'     => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['capacity'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'textarea',
            'eval'      => array('mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'coordsCH1903'       => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['coordsCH1903'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'text',
            'eval'      => array('mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'coordsWGS84'       => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['coordsWGS84'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'text',
            'eval'      => array('mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),
        'openingTime'  => array
        (
            'label'     => &$GLOBALS['TL_LANG']['tl_cabanne_sac']['openingTime'],
            'exclude'   => true,
            'search'    => true,
            'sorting'   => true,
            'inputType' => 'textarea',
            'eval'      => array('mandatory' => true, 'maxlength' => 255, 'tl_class' => 'clr'),
            'sql'       => "varchar(255) NOT NULL default ''",
        ),

    ),
);

