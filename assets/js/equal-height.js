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
 * Equal height for cards
 */
document.addEventListener('DOMContentLoaded', (e) => {

    const equalHeight = (parent, child) => {
        const parentElements = document.querySelectorAll(parent);

        for (const parentContainer of parentElements) {
            const children = parentContainer.querySelectorAll(child);
            if (children.length > 0) {
                let currentTallest = 0;
                let currentRowStart = 0;
                let rowDivs = [];
                let topPosition = 0;

                for (const childElement of children) {
                    childElement.style.height = 'auto'; // Reset height
                    topPosition = childElement.getBoundingClientRect().top;

                    if (currentRowStart !== topPosition) {
                        // Set all heights in the previous row
                        for (const div of rowDivs) {
                            div.style.height = `${currentTallest}px`;
                        }

                        // Reset for the next row
                        rowDivs = [];
                        currentRowStart = topPosition;
                        currentTallest = childElement.offsetHeight;
                        rowDivs.push(childElement);
                    } else {
                        rowDivs.push(childElement);
                        currentTallest = Math.max(currentTallest, childElement.offsetHeight);
                    }
                }

                // Set the height for the last row
                for (const div of rowDivs) {
                    div.style.height = `${currentTallest}px`;
                }
            }
        }
    };

    equalHeight('.equal-height', '.card');

    const allEvents = ["load", "resize", "orientationchange", "vueupdate"];

    for (const evt of allEvents) {
        window.addEventListener(evt, (e) => {
            equalHeight('.equal-height', '.card');
        });
    }
}, false);
