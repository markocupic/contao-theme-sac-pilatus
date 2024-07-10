<?php

declare(strict_types=1);

/*
 * This file is part of Contao Theme SAC Pilatus.
 *
 * (c) Marko Cupic 2024 <m.cupic@gmx.ch>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/markocupic/contao-theme-sac-pilatus
 */

namespace Markocupic\ContaoThemeSacPilatus\Twig\Extension;

use Contao\CoreBundle\Framework\ContaoFramework;
use Contao\StringUtil;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AddDmaSimpleGridColumnClasses extends AbstractExtension
{
    public function __construct(
        private readonly ContaoFramework $framework,
    ) {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('add_dma_simple_grid_classes', [$this, 'addDmaSimpleGridClasses']),
        ];
    }

    /**
     * Inside your _base.html.twig:
     * {% extends "@Contao/content_element/_base.html.twig" %}.
     *
     * {# Attach the grid classes to the class attribute of the content element wrapper tag. #}
     * {% set element_css_classes = add_dma_simple_grid_classes(_context) %}
     */
    public function addDmaSimpleGridClasses(array $context): string
    {
        $strClasses = $context['element_css_classes'] ?? '';

        $strDma = $context['data']['dma_simplegrid_columnsettings'] ?? null;

        $strUtil = $this->framework->getAdapter(StringUtil::class);

        $arrDma = $strUtil->deserialize($strDma);

        if (empty($strDma) || !isset($arrDma[0]) || !isset($arrDma[0]['xs'])) {
            return $strClasses;
        }

        $arrClasses = explode(' ', $strClasses);

        foreach ($arrDma[0] as $size => $col) {
            if ($col) {
                $arrClasses[] = 'col-'.$size.'-'.$col;
            }
        }

        return implode(' ', array_filter(array_unique($arrClasses)));
    }
}
