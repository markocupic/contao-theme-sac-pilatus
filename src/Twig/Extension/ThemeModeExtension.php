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

namespace Markocupic\ContaoThemeSacPilatus\Twig\Extension;

use Contao\CoreBundle\Framework\ContaoFramework;
use Contao\PageModel;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Stellt die Einstellung "Dunkles Design" aus dem Startpunkt der Webseite
 * (tl_page.sacpThemeMode) in den Templates zur Verfügung:
 *
 *   {% if sacp_theme_mode() == 'toggle' %}…{% endif %}
 */
class ThemeModeExtension extends AbstractExtension
{
    public const MODE_TOGGLE = 'toggle';

    public const MODE_AUTO = 'auto';

    public const MODE_OFF = 'off';

    public const MODES = [self::MODE_TOGGLE, self::MODE_AUTO, self::MODE_OFF];

    /**
     * @var array<int, string>
     */
    private array $cache = [];

    public function __construct(
        private readonly ContaoFramework $framework,
        private readonly RequestStack $requestStack,
    ) {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('sacp_theme_mode', $this->getThemeMode(...)),
        ];
    }

    public function getThemeMode(): string
    {
        $page = $this->getCurrentPage();

        if (!$page instanceof PageModel) {
            return self::MODE_TOGGLE;
        }

        $rootId = (int) ($page->rootId ?: $page->id);

        if (isset($this->cache[$rootId])) {
            return $this->cache[$rootId];
        }

        $root = 'root' === $page->type || 'rootfallback' === $page->type ? $page : $this->framework->getAdapter(PageModel::class)->findById($rootId);

        $mode = (string) ($root?->sacpThemeMode ?? '');

        return $this->cache[$rootId] = \in_array($mode, self::MODES, true) ? $mode : self::MODE_TOGGLE;
    }

    /**
     * Retrieves the current page from the "pageModel" request attribute. (Contao 5.3
     * does not yet provide PageFinder::getCurrentPage().) Falls back to
     * $GLOBALS['objPage'] if no valid model is found.
     */
    private function getCurrentPage(): PageModel|null
    {
        $pageModel = $this->requestStack->getMainRequest()?->attributes->get('pageModel');

        if ($pageModel instanceof PageModel) {
            return $pageModel;
        }

        if (is_numeric($pageModel)) {
            return $this->framework->getAdapter(PageModel::class)->findById((int) $pageModel);
        }

        $page = $GLOBALS['objPage'] ?? null;

        return $page instanceof PageModel ? $page : null;
    }
}
