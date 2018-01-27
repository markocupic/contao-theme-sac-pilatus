(function ($) {
    $(document).ready(function () {
        // Add smooth scrolling to all links
        $('a[href^="#"]').on('click', function (e) {
            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(href).offset().top
            },3000);
            e.preventDefault();
        });
    });
})(jQuery);



// Load resources
(function ($) {
    // WOW & Animate.css
    $(document).ready(function () {
        new WOW().init();
    });
})(jQuery);


// Tether tooltips
(function ($) {
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
})(jQuery);


/** Sticky footer **/
(function ($) {
    $().ready(function () {
        //$($("#footer").detach()).appendTo("body");
    });
})(jQuery);

/** Close and open the searchbar in the header **/
(function ($) {
    $().ready(function () {
        $('[data-action="search-bar-toggle"]').on('touchstart click', function (event) {
            if (event.handled === false) return;
            event.stopPropagation();
            event.preventDefault();
            event.handled = true;
            $('body').toggleClass('search-bar-open');
        });
        $('[data-action="close-search-bar"]').on('touchstart click', function (event) {
            if (event.handled === false) return;
            event.stopPropagation();
            event.preventDefault();
            event.handled = true;
            $('body').removeClass('search-bar-open');
        });
    });
})(jQuery);


(function ($) {
    $().ready(function () {
        function setDropdownOffset() {
            $('#header .mod_navigation ul.level_1 > li.submenu').each(function () {
                var dropdown = this;
                var dropdownToggler = $(dropdown).find('.dropdown-toggle');
                var liLength = $(dropdown).outerWidth();
                var offset = (liLength) * (-1) / 2;
                $(dropdownToggler).attr('data-offset', offset);
            });
        }

        // Add expand icon to first level submenu
        $('#header .mod_navigation ul.level_1 > li.submenu').each(function () {
            var dropdown = this;
            $(dropdown).addClass('dropdown');
            $(dropdown).append('<button class="dropdown-toggle" type="button" data-toggle="dropdown" data-placement="bottom" data-flip="false" data-offset="-50" aria-haspopup="true" aria-expanded="false"><i class="fa fa-angle-down"></i></button>');
            $(dropdown).find('ul.level_2').addClass('dropdown-menu');
            setDropdownOffset();
        });

        /** Close dropdown on window resize **/
        $(window).resize(function (e) {

            $('#header .mod_navigation .dropdown.show .dropdown-toggle').dropdown('toggle');
            setDropdownOffset();
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


