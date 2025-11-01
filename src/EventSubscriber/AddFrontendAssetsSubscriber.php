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

namespace Markocupic\ContaoThemeSacPilatus\EventSubscriber;

use Contao\CoreBundle\Routing\ResponseContext\Csp\CspHandler;
use Contao\CoreBundle\Routing\ResponseContext\ResponseContextAccessor;
use Contao\CoreBundle\Routing\ScopeMatcher;
use Symfony\Component\Asset\Packages;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

final readonly class AddFrontendAssetsSubscriber implements EventSubscriberInterface
{
    public function __construct(
        private readonly ResponseContextAccessor $responseContextAccessor,
        private readonly Packages $packages,
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
        if ($this->scopeMatcher->isFrontendRequest($e->getRequest())) {
            // Add head tags
            $GLOBALS['TL_HEAD'][] = '<meta name="author" content="SAC Sektion Pilatus">';
            $GLOBALS['TL_HEAD'][] = '<meta name="viewport" content="width=device-width, initial-scale=1.0">';

            // Dispatch the BootstrapModalReady event if bootstrap.Modal has been initialized
            $GLOBALS['TL_HEAD'][] = $this->generateScriptTag($this->getAssetUrl('js/detect-is-bs-modal-ready.js'));

            // Load theme javascript files
            $GLOBALS['TL_BODY'][] = $this->generateScriptTag($this->getAssetUrl('js/equal-height.js'));
            $GLOBALS['TL_BODY'][] = $this->generateScriptTag($this->getAssetUrl('js/theme.js'));
            $GLOBALS['TL_BODY'][] = $this->generateScriptTag($this->getAssetUrl('js/sac-frontend-login-modal.js'));
            $GLOBALS['TL_BODY'][] = $this->generateScriptTag($this->getAssetUrl('js/scroll-to-top-button.js'));
            $GLOBALS['TL_BODY'][] = $this->generateScriptTag($this->getAssetUrl('js/navigation.js'));

            // Bootstrap.js bundle (includes popper.js)
            $GLOBALS['TL_BODY'][] = $this->generateScriptTag($this->getAssetUrl('bootstrap/dist/js/bootstrap.bundle.min.js'));

            // Add Font Awesome
            $this->addFontAwesome();

            // Add Google fonts See Google Webfont helper: https://gwfh.mranftl.com/fonts
            // $GLOBALS['TL_CSS'][] = $this->getAssetUrl('fonts/open-sans.css');
            $GLOBALS['TL_CSS'][] = $this->getAssetUrl('fonts/roboto-slab.css');
        }
    }

    private function getAssetUrl(string $assetType, string $packageName = 'markocupic_contao_theme_sac_pilatus'): string
    {
        return $this->packages->getUrl($assetType, $packageName);
    }

    private function generateScriptTag(string|null $src = null, $defer = false, $script = '')
    {
        $responseContext = $this->responseContextAccessor->getResponseContext();

        if ($responseContext?->has(CspHandler::class)) {
            $cspHandler = $responseContext->get(CspHandler::class);
        }

        $attrDefer = $defer ? ' defer' : '';

        $nonce = !empty($cspHandler) ? $cspHandler->getNonce('script-src') : '';
        $attrNonce = !empty($nonce) ? \sprintf(' nonce="%s"', $nonce) : '';

        if (!empty($src)) {
            $src = '/'.ltrim($src, '/');
        }
        $attrSrc = !empty($src) ? \sprintf(' src="%s"', $src) : '';

        return \sprintf('<script%s%s%s>%s</script>', $attrDefer, $attrNonce, $attrSrc, $script);
    }

    private function addFontAwesome(): void
    {
        // Load Font Awesome key from configuration $GLOBALS['TL_BODY'][] =
        // '<script
        // src="https://kit.fontawesome.com/'.$this->fontAwesomeKitKey.'.js"
        // crossorigin="anonymous"></script>'; Due to bandwidth limitations we host
        // fontawesome ourselves @todo: CSP ->
        // https://docs.fontawesome.com/web/dig-deeper/security#:~:text=and%20address%20things.-,Content,-Security%20Policy
        $GLOBALS['TL_BODY'][] = $this->generateScriptTag('assets/contao-component-fontawesome-pro/fontawesome-pro/js/fontawesome.min.js?v=6.6.0', true);
        $GLOBALS['TL_BODY'][] = $this->generateScriptTag('assets/contao-component-fontawesome-pro/fontawesome-pro/js/light.min.js?v=6.6.0', true);
        $GLOBALS['TL_BODY'][] = $this->generateScriptTag('assets/contao-component-fontawesome-pro/fontawesome-pro/js/regular.min.js?v=6.6.0', true);
        $GLOBALS['TL_BODY'][] = $this->generateScriptTag('assets/contao-component-fontawesome-pro/fontawesome-pro/js/solid.min.js?v=6.6.0', true);
        $GLOBALS['TL_BODY'][] = $this->generateScriptTag('assets/contao-component-fontawesome-pro/fontawesome-pro/js/brands.min.js?v=6.6.0', true);

        $GLOBALS['TL_CSS'][] = 'assets/contao-component-fontawesome-pro/fontawesome-pro/css/fontawesome.min.css?v=6.6.0';
        $GLOBALS['TL_CSS'][] = 'assets/contao-component-fontawesome-pro/fontawesome-pro/css/light.min.css?v=6.6.0';
        $GLOBALS['TL_CSS'][] = 'assets/contao-component-fontawesome-pro/fontawesome-pro/css/regular.min.css?v=6.6.0';
        $GLOBALS['TL_CSS'][] = 'assets/contao-component-fontawesome-pro/fontawesome-pro/css/solid.min.css?v=6.6.0';
        $GLOBALS['TL_CSS'][] = 'assets/contao-component-fontawesome-pro/fontawesome-pro/css/brands.min.css?v=6.6.0';
        // $GLOBALS['TL_CSS'][] = 'assets/contao-component-fontawesome-pro/fontawesome-pro/css/svg-with-js.min.css?v=6.6.0';
    }
}
