<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2005-2017 Leo Feyer
 *
 * @license LGPL-3.0+
 */


/**
 * Table tl_content
 */
$GLOBALS['TL_DCA']['tl_content']['palettes']['cabanneSacDetail'] = '{type_legend},type,headline,cabanne;{template_legend:hide},customTpl;{protected_legend:hide},protected;{expert_legend:hide},guests,cssID;{invisible_legend:hide},invisible,start,stop';


// Fields
$GLOBALS['TL_DCA']['tl_content']['fields']['cabanneSac'] = array
(
    'label'     => &$GLOBALS['TL_LANG']['tl_content']['cabanneSac'],
    'exclude'   => true,
    'search'    => true,
    'inputType' => 'select',
    'options'   => array('tl_content_cabanne_sac', 'getCabannes'),
    'eval'      => array('mandatory' => true, 'maxlength' => 200, 'tl_class' => 'w50 clr'),
    'sql'       => "int(10) unsigned NOT NULL default '0'",
);

/**
 * Class tl_content_cabanne_sac
 */
class tl_content_cabanne_sac extends tl_content
{
    /**
     * @return array
     */
    public function getCabannes()
    {

        $options = array();
        $objDb = \Database::getInstance()->prepare('SELECT * FROM tl_cabanne_sac')->execute();
        while ($objDb->next())
        {
            $options[$objDb->id] = $objDb->name;
        }

        return $options;

    }

}