<?php

declare(strict_types=1);

/*
 * This file is part of Contao Theme SAC Pilatus.
 *
 * (c) Marko Cupic 2023 <m.cupic@gmx.ch>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/markocupic/contao-theme-sac-pilatus
 */

namespace Markocupic\ContaoThemeSacPilatus\EventSubscriber;

use Contao\CoreBundle\Routing\ScopeMatcher;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

final readonly class AddFrontendAssetsSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private ScopeMatcher $scopeMatcher,
        private string $fontAwesomeKitKey, // Not in use yet
    ) {
    }

    public static function getSubscribedEvents()
    {
        return [KernelEvents::REQUEST => 'addFrontendAssets'];
    }

    public function addFrontendAssets(RequestEvent $e): void
    {
        $request = $e->getRequest();

        if ($this->scopeMatcher->isFrontendRequest($request)) {
            // Dispatch the BootstrapModalReady event if bootstrap.Modal has been initialized
            $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/detect-is-bs-modal-ready.js';

            // Head tags
            $GLOBALS['TL_HEAD'][] = '<meta name="author" content="SAC Sektion Pilatus">';
            $GLOBALS['TL_HEAD'][] = '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">';

            // jQuery is loaded in the layout
            // Bootstrap.js bundle (includes popper.js)
            $GLOBALS['TL_BODY'][] = '<script src="assets/contao-component-bootstrap/bootstrap/dist/js/bootstrap.bundle.min.js"></script>';

            // Load Font Awesome key from configuration
            // $GLOBALS['TL_HEAD'][] = '<script src="https://kit.fontawesome.com/'.$this->fontAwesomeKitKey.'.js" crossorigin="anonymous"></script>';
            // Due to bandwidth limitations we host fontawesome ourselves
            $GLOBALS['TL_BODY'][] = '<script defer src="assets/contao-component-fontawesome-pro/fontawesome-pro/js/all.min.js?v=6.4.1" crossorigin="anonymous"></script>';
            $GLOBALS['TL_HEAD'][] = '<link rel="stylesheet" href="assets/contao-component-fontawesome-pro/fontawesome-pro/css/all.min.css?v=6.4.1" />';

            // Select2
            $GLOBALS['TL_BODY'][] = '<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-rc.0/js/select2.min.js" integrity="sha512-4MvcHwcbqXKUHB6Lx3Zb5CEAVoE9u84qN+ZSMM6s7z8IeJriExrV3ND5zRze9mxNlABJ6k864P/Vl8m0Sd3DtQ==" crossorigin="anonymous"></script>';
            $GLOBALS['TL_HEAD'][] = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-rc.0/css/select2.min.css" />';

            // Animate
            //$GLOBALS['TL_JAVASCRIPT'][] = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
            //$GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css';

            // Google Webfonts
            $GLOBALS['TL_HEAD'][] = '<link rel="preconnect" href="https://fonts.gstatic.com">';
            $GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,600,700,800,900&display=swap&subset=latin-ext" rel="stylesheet">';
            //$GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet">';
            //$GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@1,200&family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Varela+Round&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet">';

            // Vorschlag Buffoni Source Serif Pro
            //$GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">';

            // Embed Drag Sortable Plugin from https://rubaxa.github.io/Sortable/
            // JQuery UI does not go with popper.js
            // $GLOBALS['TL_JAVASCRIPT'][] = "https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js";
            $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/third-party/Sortable.min.js|static';

            // Enable jqueryTouchSwipe
            //$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js";
            $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/third-party/jquery.touchSwipe.min.js|static';

            // Load headroom.js https://github.com/WickyNilliams/headroom.js/
            //$GLOBALS['TL_BODY'][] = '<script src="files/theme-sac-pilatus/js/headroom.js"></script>';

            // Load theme javascript file
            $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/equal-height.min.js|static';
            $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/theme.js|static';

            // Load flatpickr (datepicker)
            $GLOBALS['TL_HEAD'][] = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">';
            $GLOBALS['TL_BODY'][] = '<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>';
            $GLOBALS['TL_BODY'][] = '<script src="https://npmcdn.com/flatpickr/dist/l10n/de.js"></script>';
        }
    }
}
