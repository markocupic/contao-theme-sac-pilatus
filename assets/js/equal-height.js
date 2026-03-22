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
            EqualHeight.apply(container, childSelector);
        }, 100);
    });

    ro.observe(container);

    // Initial
    EqualHeight.apply(container, childSelector);
};


EqualHeight.apply = (container, childSelector) => {
    const children = container.querySelectorAll(childSelector);

    if (!children.length) return;

    for (const childElement of children) {
        childElement.style.height = 'auto';
    }

    const tolerance = 5;
    const rowGroups = new Map(); // Map<rowIndex, Array<{element, height}>>
    let currentRowIndex = 0;
    let previousTop = null;

    for (const childElement of children) {
        const top = childElement.getBoundingClientRect().top;
        const height = childElement.offsetHeight;

        // Check if this is a new row
        if (previousTop !== null && Math.abs(previousTop - top) > tolerance) {
            currentRowIndex++;
        }

        // Add the element to its row group
        if (!rowGroups.has(currentRowIndex)) {
            rowGroups.set(currentRowIndex, []);
        }

        rowGroups.get(currentRowIndex).push({
            element: childElement,
            height: height,
        });

        previousTop = top;
    }

    // Apply max height to each row group
    for (const rowElements of rowGroups.values()) {
        const maxHeight = Math.max(...rowElements.map(data => data.height));

        for (const data of rowElements) {
            data.element.style.height = `${maxHeight}px`;
        }
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
