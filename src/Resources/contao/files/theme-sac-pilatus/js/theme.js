/** Style file inputs **/
(function ($) {
    $(document).ready(function () {
        $('input.custom-input-file').each(function () {
            var label = $(this).siblings('label.custom-input-file');
            var labelVal = $(label).html();
            $(this).change(function (e) {
                var fileName = '';
                if (this.files && this.files.length > 1) {
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                }
                else {
                    fileName = e.target.value.split('\\').pop();
                }
                if (fileName) {
                    $(label).html(fileName);
                }
                else {
                    $(label).html(labelVal);
                }
            });
        });

    });
})(jQuery);


// Equal height for cards
(function ($) {
    $(document).ready(function () {
        $(window).on("load resize orientationchange", function () {
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

/** Header navigation **/
(function ($) {
    $().ready(function () {
        /**
         function setDropdownOffset() {
            $('#header .mod_navigation ul.level_1 > li.submenu').each(function () {
                var dropdown = this;
                var dropdownToggler = $(dropdown).find('.dropdown-toggle');
                var liLength = $(dropdown).outerWidth();
                var offset = (liLength) * (-1) / 2;
                $(dropdownToggler).attr('data-offset', offset);
            });
        }
         */


        // Add expand icon to first level submenu
        $('#header .mod_navigation ul.level_1 > li.submenu').each(function () {
            //setDropdownOffset();
        });

        // trigger dropdown menu
        $('.mod_navigation ul.level_1 > li.submenu.not-clickable-page-container > a,  .mod_navigation ul.level_1 > li.submenu.not-clickable-page-container > strong').click(function (e) {
            $(this).parent('ul.level_1 > li.dropdown').children('.dropdown-toggle').trigger('click');
        });

        // Prevent default if page has class "not-clickable-page-container'
        $('.mod_navigation li.submenu.not-clickable-page-container > a').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        // Control the header dropdown navigation
        $(document).on('hide.bs.dropdown', function (e) {

            if ($(e.relatedTarget).is('#header .mod_navigation ul.level_1 > li > .dropdown-toggle')) {
                var hide = false;
                // Hide when clicking on the dropdown toggler
                if ($(e.currentTarget.activeElement).hasClass('dropdown-toggle')) {
                    hide = true;
                }
                // Hide when clicking a level_1 link element
                else if ($(e.currentTarget.activeElement).is('ul.level_1 > li > a') || $(e.currentTarget.activeElement).is('ul.level_1 > li > strong')) {
                    hide = true;
                }
                // Hide when clicking on the body element
                else if ($(e.currentTarget.activeElement).is('body')) {
                    hide = true;
                }

                if (hide === true) {
                    return true;
                }
                // Otherwise keep the dropdown open
                return false;

            }
            return true;

        });


        /** Close dropdown on window resize **/
        $(window).resize(function (e) {

            $('#header .mod_navigation .dropdown.show .dropdown-toggle').dropdown('toggle');
            //setDropdownOffset();
        });
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

/** Mediabox **/
(function ($) {
    $().ready(function () {

        /** Add caption to the title attribute when using colorbox **/
        $('.ce_gallery a[data-lightbox]').map(function () {
            var thumb = $(this);

            $(this).siblings('figcaption').map(function () {
                if ($(this).text() != '') {
                    thumb.attr('title', $(this).text());
                }
            });
        });

    });
})(jQuery);


/** shorten download links **/
(function ($) {
    $().ready(function () {
        if (window.screen.width < 800) {
            var maxStringLength = 18;

        } else {
            maxStringLength = 40;
        }
        var classes = ['.ce_downloads a', '.ce_download a'];
        $.each(classes, function (index, strClass) {
            $(strClass).each(function (index, el) {
                var strFilename = el.innerHTML;
                var match = strFilename.match(/(.*)\<span(.*)/);
                if (match) {
                    var filename = match[1];
                    if (filename.length > maxStringLength) {
                        var filenameShortened = filename.substring(0, maxStringLength) + ' … ';
                        el.innerHTML = filenameShortened + '<span' + match[2];
                    }
                }
            });
        });
    });
})(jQuery);


