/**
 * Initialize popper.js tooltips
 */
document.addEventListener('DOMContentLoaded', (event) => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => {
        if (tooltipTriggerEl.hasAttribute('data-title')) {
            title = tooltipTriggerEl.getAttribute('data-title');
            tooltipTriggerEl.setAttribute('data-bs-title', title);
            tooltipTriggerEl.setAttribute('title', title);
            new bootstrap.Tooltip(tooltipTriggerEl);
        } else {
            new bootstrap.Tooltip(tooltipTriggerEl);
        }
    });

}, false);

/** Style file inputs **/
//https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
document.addEventListener('DOMContentLoaded', (event) => {
    jQuery('input.custom-input-file').each(function () {
        var label = jQuery(this).siblings('label.custom-input-file');
        var labelVal = jQuery(label).html();
        jQuery(this).change(function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1) {
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            } else {
                fileName = e.target.value.split('\\').pop();
            }
            if (fileName) {
                jQuery(label).html(fileName);
            } else {
                jQuery(label).html(labelVal);
            }
        });
    });
}, false);

// Equal height for cards
document.addEventListener('DOMContentLoaded', (event) => {

    const allEvents = ["load", "resize", "orientationchange", "vueupdate"];

    for (const evt of allEvents) {
        window.addEventListener(evt, (e) => {
            equalheight('.equal-height', '.card');
        });
    }
}, false);

/** Close and open the search form overlay **/
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

/** Main Navigation **/
document.addEventListener('DOMContentLoaded', (event) => {
    // Prevent default if page has class "page-container'
    jQuery('.mod_navigation ul.level_2 > li.page-container > a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // Prevent default if page has class "page-container'
    jQuery('.mod_navigation.sidebar-navigation li.page-container > a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    /** Sidebar navigation: accordion behavior when clicking on page-container **/
    /*
     * No more used

    let navItems = document.querySelectorAll('.mod_navigation.sidebar-navigation a.submenu');
    if (navItems) {
        navItems.forEach((el) => {
            if (el.classList.contains('page-container')) {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.target.closest('li')
                    .querySelector('.toggle-submenu')
                    .click();
                });
            }
        });
    }
    */
}, false);

/** Scroll to top button **/
document.addEventListener('DOMContentLoaded', (event) => {
    jQuery('body').append('<div class="scroll-to-top"><a href="#"><span class="fa-regular fa-chevron-up"></span></a></div>');

    //Check to see if the window is top if not then display button
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scroll-to-top').fadeIn();
        } else {
            jQuery('.scroll-to-top').fadeOut();
        }
    });

    //Click event to scroll to top
    jQuery('.scroll-to-top').click(function () {
        jQuery('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
}, false);

/** Scroll to form fields if there are errors **/
document.addEventListener('DOMContentLoaded', (event) => {
    if (jQuery('.widget.error').length) {

        var interval = window.setInterval(function () {
            // Wait until the onload overlay has disapeared
            if (jQuery('body.loaded').length) {
                clearInterval(interval);
                window.setTimeout(function () {
                    window.scrollTo(0, jQuery('.widget.error').first().offset().top);
                }, 100);
            }
        }, 100);
    }
}, false);

/** shorten download links **/
document.addEventListener('DOMContentLoaded', (event) => {
    let inputScreenWidth = window.innerWidth;
    if (inputScreenWidth < 300) {
        inputScreenWidth = 300; // min. screen width
    }

    const targetRatio = 36.0 / 600; // scaling [string length / screen width]
    const scaledLength = Math.ceil(targetRatio * inputScreenWidth);
    const maxStringLength = Math.min(scaledLength, 100); // max. length
    const classes = ['.content-downloads a', '.content-download a'];
    $.each(classes, function (index, strClass) {
        jQuery(strClass).each(function (index, el) {
            const filename = el.text;
            if (filename.length > maxStringLength) {
                const filenameShortened = filename.substring(0, maxStringLength) + ' … ';
                el.text = filenameShortened;
            }
        });
    });
}, false);

/** Desktop header navbar */
document.addEventListener('DOMContentLoaded', (event) => {

    /** Avoid closing the header navbar dropdown when clicking inside. **/
    jQuery('#header .header-navbar ul.dropdown-menu').on('click', function (e) {
        e.stopPropagation();
    });

    /** Close dropdown when clicking the toggler **/
    jQuery('.close-header-navigation-dropdown').click(function (e) {
        // Get the parent list element
        let li = e.target.closest('.dropdown');
        li.querySelector('[data-bs-toggle="dropdown"]').click();
    });
}, false);

/** Add the onclick attribute to the image if download(s) element is combined with an image **/
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
