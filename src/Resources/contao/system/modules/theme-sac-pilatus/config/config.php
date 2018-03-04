<?php
if (TL_MODE == 'FE')
{
    // Head tags
    $GLOBALS['TL_HEAD'][] = '<meta name="author" content="SAC Sektion Pilatus">';
    $GLOBALS['TL_HEAD'][] = '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">';


    // Bootstrap.js  Load in layout
    //$GLOBALS['TL_JAVASCRIPT'][] = "https://code.jquery.com/jquery-3.2.1.slim.min.js";
    //$GLOBALS['TL_JAVASCRIPT'][] = "https://code.jquery.com/jquery-1.12.4.min.js";

    // Popper.js must be loaded before bootstrap.js
    $GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js";

    // Bootstrap.js
    $GLOBALS['TL_JAVASCRIPT'][] = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js";

    // Bootstrap datepicker
    //$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.min.js";
    $GLOBALS['TL_JAVASCRIPT'][] = "files/theme-sac-pilatus/js/third-party/bootstrap-datepicker.min.js|static";
    //$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/locales/bootstrap-datepicker.de.min.js";
    $GLOBALS['TL_JAVASCRIPT'][] = "files/theme-sac-pilatus/js/third-party/bootstrap-datepicker.de.min.js|static";
    //$GLOBALS['TL_CSS'][] = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker.standalone.min.css";
    $GLOBALS['TL_CSS'][] = "files/theme-sac-pilatus/css/third-party/bootstrap-datepicker.standalone.min.css|static";

    // Load FontAwesome
    //$GLOBALS['TL_JAVASCRIPT'][] = "https://use.fontawesome.com/926b4fc2c0.js";
    $GLOBALS['TL_CSS'][] = 'files/fontawesome-pro-5.0.6/web-fonts-with-css/css/fontawesome-all.min.css|static';
    $GLOBALS['TL_HEAD'][] = '<script defer src="files/fontawesome-pro-5.0.6/svg-with-js/js/fontawesome-all.min.js"></script>';


    $GLOBALS['TL_HEAD'][] = '<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"></script>';
    $GLOBALS['TL_HEAD'][] = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css" />';

    // Animate
    //$GLOBALS['TL_JAVASCRIPT'][] = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
    //$GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css';

    // Google Webfonts
    //$GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">';
    $GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">';
    //$GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i" rel="stylesheet">';
    //$GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css?family=Vollkorn" rel="stylesheet">';
    //$GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css?family=Varela+Round"rel="stylesheet">';
    //$GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css?family=Questrial" rel="stylesheet">';
    $GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">';
    // Slick: The last slider yo ever need
    //$GLOBALS['TL_JAVASCRIPT'][] = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.js';
    //$GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.css';
    //$GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.css';


    // Embed Drag Sortable Plugin from https://rubaxa.github.io/Sortable/
    // JQuery UI doesn't go with popper.js
    //$GLOBALS['TL_JAVASCRIPT'][] = "https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js";
    $GLOBALS['TL_JAVASCRIPT'][] = "files/theme-sac-pilatus/js/third-party/Sortable.min.js|static";


    // Enable jqueryTouchSwipe
    //$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js";
    $GLOBALS['TL_JAVASCRIPT'][] = "files/theme-sac-pilatus/js/third-party/jquery.touchSwipe.min.js|static";

    // Load headroom.js https://github.com/WickyNilliams/headroom.js/
    //$GLOBALS['TL_HEAD'][] = '<script src="files/theme-sac-pilatus/js/headroom.js"></script>';

    // Load theme javascript file
    $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/equal-height.min.js|static';
    $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/theme.js|static';

}
