// Load resources
(function ($) {

    <!-- Fonts -->
    //$('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" type="text/css" />');
    //$('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700" type="text/css" />');

    // Load tether
    $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/css/tether-theme-arrows-dark.min.css" type="text/css" />');
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js");

    // Load Bootstrap
    $.getScript("/files/theme-sac-pilatus/bootstrap/dist/js/bootstrap.min.js");

    // Load FontAwesome
    $.getScript("https://use.fontawesome.com/926b4fc2c0.js");

    // WOW & Animate.css
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js")
        .done(function (script, textStatus) {
            new WOW().init();
        });

    // Animate
    $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" type="text/css" />');

    // Slick: The last slider yo ever need
    $.getScript("files/theme-sac-pilatus/slick-slider/slick/slick.min.js");
    $('head').append('<link rel="stylesheet" href="files/theme-sac-pilatus/slick-slider/slick/slick-theme.css" type="text/css" />');
    $('head').append('<link rel="stylesheet" href="files/theme-sac-pilatus/slick-slider/slick/slick.css" type="text/css" />');



})(jQuery);




/** Sticky header on scroll **/
$(document).ready(function() {
    // Custom
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop){
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else{
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function() {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});



/** Sticky footer **/
(function ($) {
    $().ready(function () {
        $($("#footer").detach()).appendTo("body");
    });
})(jQuery);


(function ($) {
    $().ready(function () {
        // Add expand icon to first level submenu
        $('#header .mod_navigation ul.level_1 > li.submenu').append('<i role="button" class="toggler fa fa-chevron-down"></i>');

        // Add event click
        $('#header .mod_navigation ul.level_1 > li.submenu > .toggler').click(function (e) {


            $(this).closest('ul').find('.expanded').removeClass('expanded');
            $(this).closest('li').addClass('expanded');

            $('.navbar-backdrop').remove();

            $('body').append('<div class="navbar-backdrop"></div>');
            $('.navbar-backdrop').click(function (e) {
                e.preventDefault();
                dispandNavigation();
            });
            $(window).resize(function (e) {
                e.preventDefault();
                dispandNavigation();
            });
            $(window).scroll(function (e) {
                e.preventDefault();
                dispandNavigation();
            });

            function dispandNavigation() {
                $('.navbar-backdrop').remove();
                $('.mod_navigation .expanded').removeClass('expanded');
            }

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
        if($('.widget.error').length){

            var interval = window.setInterval(function(){
                // Wait until the onload overlay has disapeared
                if($('body.loaded').length)
                {
                    clearInterval(interval);
                    window.setTimeout(function(){
                        window.scrollTo(0, $('.widget.error').first().offset().top);
                    },100);
                }
            },100);
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

