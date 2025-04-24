/*
 * This file is part of Contao Theme SAC Pilatus.
 *
 * (c) Marko Cupic <m.cupic@gmx.ch>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/markocupic/contao-theme-sac-pilatus
 */

"use strict";

/**
 * Dispatch the BootstrapModalReady event
 * when the Bootstrap Modal component is available.
 * We use this for the login modal window.
 */
document.addEventListener('DOMContentLoaded', () => {
    const INTERVAL_DELAY = 100;
    const isBootstrapModalAvailable = () => Boolean(bootstrap?.Modal);

    if (typeof checkBootstrapModalInterval === 'undefined') {
        const checkBootstrapModalInterval = setInterval(() => {
            if (isBootstrapModalAvailable()) {
                document.dispatchEvent(new CustomEvent('BootstrapModalReady'));
                clearInterval(checkBootstrapModalInterval);
            }
        }, INTERVAL_DELAY);
    }
});
