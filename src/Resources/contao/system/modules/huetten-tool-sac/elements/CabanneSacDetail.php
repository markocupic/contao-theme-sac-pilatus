<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2005-2017 Leo Feyer
 *
 * @license LGPL-3.0+
 */

namespace Markocupic;


/**
 * Front end content element "image".
 *
 * @author Leo Feyer <https://github.com/leofeyer>
 */
class CabanneSacDetail extends \ContentElement
{

    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'ce_cabanne_sac_detail_card';

    /**
     * Files model
     * @var FilesModel
     */
    protected $objFilesModel;


    /**
     * Return if the image does not exist
     *
     * @return string
     */
    public function generate()
    {
        if ($this->singleSRC == '')
        {
            return '';
        }

        $objFile = \FilesModel::findByUuid($this->singleSRC);

        if ($objFile === null || !is_file(TL_ROOT . '/' . $objFile->path))
        {
            return '';
        }

        $this->singleSRC = $objFile->path;
        $this->objFilesModel = $objFile;

        return parent::generate();
    }


    /**
     * Generate the content element
     */
    protected function compile()
    {
        $this->addImageToTemplate($this->Template, $this->arrData, null, null, $this->objFilesModel);
    }
}
