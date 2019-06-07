<?php
if (TL_MODE == 'FE')
{
    // Head tags
    $GLOBALS['TL_HEAD'][] = '<meta name="author" content="SAC Sektion Pilatus">';
    $GLOBALS['TL_HEAD'][] = '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">';

    // JQuery is loaded in the layout
    // Popper.js must be loaded before bootstrap.js
    $GLOBALS['TL_HEAD'][] = '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>';

    // Bootstrap.js
    $GLOBALS['TL_HEAD'][] = '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>';

    // Load FontAwesome
    $GLOBALS['TL_CSS'][] = '/files/fontawesome-pro-5.5.0-web/css/all.css|static';
    $GLOBALS['TL_HEAD'][] = '<script defer src="/files/fontawesome-pro-5.5.0-web/js/all.js"></script>';

    // Select2
    $GLOBALS['TL_HEAD'][] = '<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.1/js/select2.min.js"></script>';
    $GLOBALS['TL_HEAD'][] = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.1/css/select2.min.css" />';

    // Animate
    //$GLOBALS['TL_JAVASCRIPT'][] = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
    //$GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css';

    // Google Webfonts
    //$GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">';

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

    // Load flatpickr
    $GLOBALS['TL_HEAD'][] = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">';
    $GLOBALS['TL_HEAD'][] = '<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>';
    $GLOBALS['TL_HEAD'][] = '<script src="https://npmcdn.com/flatpickr/dist/l10n/de.js"></script>';

}
