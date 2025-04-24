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
 * Initializes a scroll-to-top button and its event handlers.
 */
document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = createScrollToTopButton();
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => handleScroll(scrollButton));
    scrollButton.addEventListener('click', handleScrollToTopClick);
});

/**
 * Creates and returns the scroll-to-top button element.
 * @returns {HTMLDivElement} Scroll-to-top button element.
 */
function createScrollToTopButton() {
    const button = document.createElement('div');
    button.className = 'scroll-to-top';
    button.innerHTML = '<a href="#"><span class="fa-regular fa-chevron-up"></span></a>';
    button.style.display = 'none'; // Initially hidden
    return button;
}

/**
 * Handles the visibility of the scroll-to-top button based on scroll position.
 * @param {HTMLElement} scrollButton Scroll-to-top button element.
 */
function handleScroll(scrollButton) {
    scrollButton.style.display = window.scrollY > 100 ? 'block' : 'none';
}

/**
 * Smoothly scrolls to the top of the page when the button is clicked.
 * @param {Event} event Click event.
 */
function handleScrollToTopClick(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
