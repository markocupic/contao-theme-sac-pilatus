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

/** Remove leading zeros in login forms **/
(function ($) {
    $(document).ready(function () {
        $('input[name="username"]').each(function () {
            var elInput = this;
            $(elInput).on('input', function (e) {
                if ($(elInput).val() != '') {
                    var value = $(elInput).val().replace(/^0+/, '');
                    $(elInput).val(value);
                }
            });
        });
    });
})(jQuery);

/** Style file inputs **/
//https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
(function ($) {
    $(document).ready(function () {
        $('input.custom-input-file').each(function () {
            var label = $(this).siblings('label.custom-input-file');
            var labelVal = $(label).html();
            $(this).change(function (e) {
                var fileName = '';
                if (this.files && this.files.length > 1) {
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                } else {
                    fileName = e.target.value.split('\\').pop();
                }
                if (fileName) {
                    $(label).html(fileName);
                } else {
                    $(label).html(labelVal);
                }
            });
        });

    });
})(jQuery);

// Equal height for cards
(function ($) {
    $(document).ready(function () {
        $(window).on("load resize orientationchange vueupdate", function () {
            equalheight('.equal-height', '.card');
        });
    });
})(jQuery);

// Load resources
(function ($) {
    // WOW & Animate.css
    $(document).ready(function () {
        //new WOW().init();
    });
})(jQuery);

// Popper tooltips
(function ($) {
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
})(jQuery);

/** Close and open the search form overlay **/
(function ($) {
    $().ready(function () {
        if (!$(".mod_search_custom .mod_search_custom_overlay").length) {
            return;
        }
        var form = $(".mod_search_custom .mod_search_custom_overlay").first();

        // Move form to the top of the body
        $(form).detach().prependTo('body');

        // Show overlay
        $('.search-toggler').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            form.addClass('is-pre-active');
            window.setTimeout(function () {
                form.addClass('is-active');
                form.removeClass('is-pre-active');
            }, 100);
        });

        // Hide form when clicking the close icon
        $('.mod_search_custom_overlay .close-button').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            hideSearchForm();
        });

        // Hide form when typing ESC
        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                hideSearchForm();
            }
        });

        /**
         * Close search form
         */
        function hideSearchForm() {
            form.removeClass('is-active');
            form.removeClass('is-pre-active');
        }
    });
})(jQuery);

/** Main Navigation **/
(function ($) {
    $().ready(function () {
        // Prevent default if page has class "page-container'
        $('.mod_navigation ul.level_2 > li.page-container > a').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        // Prevent default if page has class "page-container'
        $('.mod_navigation.sidebar-navigation li.page-container > a').click(function (e) {
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
    });
})(jQuery);

/** Scroll to top button **/
(function ($) {
    $().ready(function () {
        $('body').append('<div class="scroll-to-top"><a href="#"><span class="fa fa-chevron-up"></span></a></div>');

        //Check to see if the window is top if not then display button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-to-top').fadeIn();
            } else {
                $('.scroll-to-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
    });
})(jQuery);

/** Scroll to form fields if there are errors **/
(function ($) {
    $().ready(function () {
        if ($('.widget.error').length) {

            var interval = window.setInterval(function () {
                // Wait until the onload overlay has disapeared
                if ($('body.loaded').length) {
                    clearInterval(interval);
                    window.setTimeout(function () {
                        window.scrollTo(0, $('.widget.error').first().offset().top);
                    }, 100);
                }
            }, 100);
        }
    });
})(jQuery);

/** shorten download links **/
(function ($) {
    $().ready(function () {
        var inputScreenWidth = window.innerWidth;
        if (inputScreenWidth < 300) {
            inputScreenWidth = 300; // min. screen width
        }
        const targetRatio = 36.0 / 600; // scaling [string length / screen width]
        const scaledLength = Math.ceil(targetRatio * inputScreenWidth);
        const maxStringLength = Math.min(scaledLength, 100); // max. length
        const classes = ['.content-downloads a', '.content-download a'];
        $.each(classes, function (index, strClass) {
            $(strClass).each(function (index, el) {
                const strFilename = el.innerHTML;
                const match = strFilename.match(/(.*)\<span(.*)/);
                if (match) {
                    const filename = match[1];
                    if (filename.length > maxStringLength) {
                        const filenameShortened = filename.substring(0, maxStringLength) + ' … ';
                        el.innerHTML = filenameShortened + '<span' + match[2];
                    }
                }
            });
        });
    });
})(jQuery);

/** Desktop header navbar */
(function ($) {
    $().ready(function () {
        /** Avoid closing the header navbar dropdown when clicking inside. **/
        $('#header .header-navbar ul.dropdown-menu').on('click', function (e) {
            e.stopPropagation();
        });

        /** Close dropdown when clicking the toggler **/
        $('.close-header-navigation-dropdown').click(function (e) {
            // Get the parent list element
            let li = e.target.closest('.dropdown');
            li.querySelector('[data-bs-toggle="dropdown"]').click();
        });
    });
})(jQuery);



