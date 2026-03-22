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

const EqualHeight = {};

EqualHeight.observe = (container, childSelector) => {
    if (!container) return;

    let timer = null;

    const ro = new ResizeObserver(() => {
        // Clear the timeout if there is one
        if (timer !== null) {
            clearTimeout(timer);
        }

        // Set the new timer
        timer = setTimeout(() => {
            timer = null;
            EqualHeight.run(container, childSelector);
        }, 100);
    });

    ro.observe(container);

    // Initial
    EqualHeight.run(container, childSelector);
};


EqualHeight.run = (container, childSelector) => {
    const children = container.querySelectorAll(childSelector);
    if (!children.length) return;

    let currentTallest = 0;
    let currentRowStart = null;
    let rowDivs = [];

    for (const childElement of children) {
        childElement.style.height = 'auto';
        const topPosition = childElement.offsetTop;

        const tolerance = 10;

        // Check if the element is in the same row as the previous one
        if (currentRowStart === null || Math.abs(currentRowStart - topPosition) > tolerance) {
            // The element is the first in the row, so set the height to the current tallest element
            for (const div of rowDivs) {
                div.style.height = `${currentTallest}px`;
            }

            rowDivs = [];
            currentRowStart = topPosition;
            currentTallest = childElement.offsetHeight;
            rowDivs.push(childElement);
        } else {
            // The element is not the first in the row, so add it to the rowDivs array
            rowDivs.push(childElement);
            currentTallest = Math.max(currentTallest, childElement.offsetHeight);
        }
    }

    for (const div of rowDivs) {
        div.style.height = `${currentTallest}px`;
    }
};


document.addEventListener('DOMContentLoaded', () => {

    const PARENT_SELECTOR = '.equal-height';
    const CHILD_SELECTOR = '.card';

    const containers = document.querySelectorAll(PARENT_SELECTOR);

    for (const container of containers) {
        EqualHeight.observe(container, CHILD_SELECTOR);
    }

}, false);
