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
 * Handles desktop header navbar and aside navigation functionality.
 */
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Initializes the functionality to close dropdown menus when specific toggler elements are clicked.
     * This script binds click event listeners to elements with the class `close-header-navigation-dropdown`.
     * Upon clicking, it finds the closest parent dropdown element and triggers the associated dropdown toggle button,
     * ensuring the dropdown menu is closed programmatically.
     */
    (() => {
        /**
         * Closes the dropdown menu when the close toggler is clicked.
         * Finds the parent dropdown element and programmatically triggers the dropdown toggle button.
         */
        const closeTogglers = document.querySelectorAll('.close-header-navigation-dropdown');

        for (const toggler of closeTogglers) {
            toggler.addEventListener('click', (e) => {
                const li = e.target.closest('.dropdown'); // Finds the closest parent dropdown element.
                const dropdownToggle = li.querySelector('[data-bs-toggle="dropdown"]'); // Selects the dropdown toggle button.

                if (dropdownToggle && dropdownToggle.classList.contains('show')) {
                    dropdownToggle.click(); // Simulates a click on the dropdown toggle to close the menu.
                }
            });
        }
    })();

    /**
     * Attaches click event listeners to links within elements with the class 'page-container'
     * inside navigation menus of level 2. The event handler prevents the default action
     * and stops propagation of the click event.
     */
    (() => {
        // Prevent default if a link is inside an element with the class 'page-container'
        const level2Links = document.querySelectorAll('.mod_navigation ul.level_2 > li.page-container > a');

        for (const link of level2Links) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        }
    })();

    /**
     * Binds event listeners to all sidebar navigation links with the class 'page-container'.
     * The event listener prevents the default action and stops propagation of the 'click' event
     * when these links are clicked.
     */
    (() => {
        const sidebarLinks = document.querySelectorAll('.mod_navigation.sidebar-navigation li.page-container > a');

        for (const link of sidebarLinks) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        }
    })();

    /**
     * Initializes the accordion behavior for sidebar navigation elements with the class 'submenu'.
     * Each navigation item is evaluated, and if it contains the class 'page-container',
     * a click event listener is added to prevent the default behavior.
     * The listener toggles the associated submenu by programmatically triggering a click
     * on the '.toggle-submenu' element within the closest 'li' parent if it exists.
     */
    (() => {
        const navItems = document.querySelectorAll('.mod_navigation.sidebar-navigation a.submenu');

        for (const navItem of navItems) {
            if (navItem.classList.contains('page-container')) {
                navItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    const toggleSubmenu = e.target.closest('li')?.querySelector('.toggle-submenu');
                    if (toggleSubmenu) {
                        toggleSubmenu.click();
                    }
                });
            }
        }
    })();
});
