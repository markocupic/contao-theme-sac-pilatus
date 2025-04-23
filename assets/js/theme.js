/**
 * Initialize popper.js tooltips
 */
document.addEventListener('DOMContentLoaded', (event) => {
    const tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    for (const tooltipTriggerEl of tooltipTriggerElements) {
        if (tooltipTriggerEl.hasAttribute('data-title')) {
            const title = tooltipTriggerEl.getAttribute('data-title');
            tooltipTriggerEl.setAttribute('data-bs-title', title);
            tooltipTriggerEl.setAttribute('title', title);
            new bootstrap.Tooltip(tooltipTriggerEl);
        } else {
            new bootstrap.Tooltip(tooltipTriggerEl);
        }
    }
}, false);

/**
 * Close and open the search form overlay
 */
document.addEventListener('DOMContentLoaded', (event) => {

    if (null === document.getElementById('websiteSearch')) {
        return;
    }

    // Detach and append the search container as the first child to the body
    const searchContainer = document.getElementById('websiteSearch');
    searchContainer.parentElement.removeChild(searchContainer);
    document.querySelector('body').prepend(searchContainer);

    // Show overlay
    document.getElementById('openWebsiteSearchButton').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openSearchForm();
    });

    // Hide form when clicking the close icon
    document.getElementById('closeWebsiteSearchButton').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeSearchForm();
    });

    // Hide form when typing ESC
    document.addEventListener('keyup', (e) => {
        if (e.code === 'Escape' || e.code === 'Esc' || e.key === 'Escape' || e.key === 'Esc') {
            closeSearchForm();
        }
    });

    // Close search form
    function openSearchForm() {
        searchContainer.classList.add('is-pre-active');
        window.setTimeout(() => {
            document.getElementById('openWebsiteSearchButton').setAttribute('aria-expanded', 'true');
            document.getElementById('closeWebsiteSearchButton').setAttribute('aria-expanded', 'true');
            searchContainer.classList.add('is-active');
            searchContainer.classList.remove('is-pre-active');
        }, 100);
    }

    // Close search form
    function closeSearchForm() {
        document.getElementById('openWebsiteSearchButton').setAttribute('aria-expanded', 'false');
        document.getElementById('closeWebsiteSearchButton').setAttribute('aria-expanded', 'false');
        searchContainer.classList.remove('is-active');
        searchContainer.classList.remove('is-pre-active');
    }
}, false);

/**
 * Main Navigation & Aside-/Mobile-Navigation
 */
document.addEventListener('DOMContentLoaded', () => {
    // Prevent default if a link is inside an element with the class 'page-container'
    const level2Links = document.querySelectorAll('.mod_navigation ul.level_2 > li.page-container > a');

    for (const link of level2Links) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    }

    // Prevent default for sidebar navigation links with the class 'page-container'
    const sidebarLinks = document.querySelectorAll('.mod_navigation.sidebar-navigation li.page-container > a');

    for (const link of sidebarLinks) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    }

    // Sidebar navigation: accordion behavior for elements with the class 'submenu'
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
});

/**
 * Scroll to top button
 */
document.addEventListener('DOMContentLoaded', (e) => {
    // Append the scroll-to-top button
    const scrollToTopButton = document.createElement('div');
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.innerHTML = '<a href="#"><span class="fa-regular fa-chevron-up"></span></a>';
    document.body.appendChild(scrollToTopButton);

    // Check to see if the window is at the top; if not, display the button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Click event to scroll to the top
    scrollToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    });
});

/**
 * Scroll to form fields if there are errors
 */
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelectorAll('.widget.error').length > 0) {
        const interval = window.setInterval(() => {
            // Wait until the onload overlay has disappeared
            clearInterval(interval);
            window.setTimeout(() => {
                let errorWidget = document.querySelector('.widget.error');

                if (errorWidget) {
                    window.scrollTo({
                        top: errorWidget.getBoundingClientRect().top + window.scrollY, behavior: 'auto'
                    });
                }
            }, 300);

        }, 300);
    }
});

/**
 * Adjusts and shortens download link text based on screen width.
 * Ensures text fits within specified maximum string length of 100 characters while retaining clarity.
 */
document.addEventListener('DOMContentLoaded', (event) => {
    // Capture the current screen width. Ensure a minimum screen width of 300 pixels.
    let inputScreenWidth = window.innerWidth;
    if (inputScreenWidth < 300) {
        inputScreenWidth = 300; // Set minimum screen width for proper scaling.
    }

    // Define the ratio for scaling string length based on screen width.
    const targetRatio = 36.0 / 600; // [string length / screen width]
    const scaledLength = Math.ceil(targetRatio * inputScreenWidth);
    const maxStringLength = Math.min(scaledLength, 100);

    // Define the CSS selectors for the elements containing the download links.
    const classes = ['.content-downloads a', '.content-download a'];

    for (const strClass of classes) {
        const elements = document.querySelectorAll(strClass);

        for (const el of elements) {
            const filename = el.textContent;

            // Shorten the filename if it exceeds the maximum allowed length.
            if (filename.length > maxStringLength) {
                const filenameShortened = filename.substring(0, maxStringLength) + ' … ';
                el.textContent = filenameShortened; // Update the element's text content.
            }
        }
    }
});


/**
 * Handles desktop header navbar functionality.
 * Includes behavior for dropdown menus and close toggler elements.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Prevents dropdown menu from closing when clicking inside its content.
     * This ensures the dropdown remains open during user interaction.
     */
    const dropdownMenus = document.querySelectorAll('#header .navbar-header .dropdown-menu');

    for (const menu of dropdownMenus) {
        menu.addEventListener('click', (e) => {
            e.stopPropagation(); // Stops the click event from propagating to parent elements.
        });
    }

    /**
     * Closes the dropdown menu when the close toggler is clicked.
     * Finds the parent dropdown element and programmatically triggers the dropdown toggle button.
     */
    const closeTogglers = document.querySelectorAll('.close-header-navigation-dropdown');

    for (const toggler of closeTogglers) {
        toggler.addEventListener('click', (e) => {
            const li = e.target.closest('.dropdown'); // Finds the closest parent dropdown element.
            const dropdownToggle = li.querySelector('[data-bs-toggle="dropdown"]'); // Selects the dropdown toggle button.

            if (dropdownToggle) {
                dropdownToggle.click(); // Simulates a click on the dropdown toggle to close the menu.
            }
        });
    }
});


/**
 * Add the onclick attribute to the image if download(s) element is combined with an image
 */
document.addEventListener('DOMContentLoaded', (event) => {
    const downloadElements = document.querySelectorAll('.content-download a, .content-downloads a');

    const tooltipList = [...downloadElements].map(node => {
        if (node.parentElement) {
            let figure = node.parentElement.querySelector('figure');
            if (figure) {
                figure.setAttribute('style', 'cursor:pointer');
                figure.setAttribute('onclick', "javascript:location.href='" + node.getAttribute('href') + "'");
            }
        }
    });

}, false);
