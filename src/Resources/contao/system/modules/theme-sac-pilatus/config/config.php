<?php
if (TL_MODE === 'FE')
{
    // Head tags
    $GLOBALS['TL_HEAD'][] = '<meta name="author" content="SAC Sektion Pilatus">';
    $GLOBALS['TL_HEAD'][] = '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">';

    // JQuery is loaded in the layout
    // Bootstrap.js bundle (includes popper.js)
    $GLOBALS['TL_HEAD'][] = '<script src="assets/contao-component-bootstrap/bootstrap/dist/js/bootstrap.bundle.min.js"></script>';

    // Load FontAwesome
    $GLOBALS['TL_HEAD'][] = '<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-yJpxAFV0Ip/w63YkZfDWDTU6re/Oc3ZiVqMa97pi8uPt92y0wzeK3UFM2yQRhEom" crossorigin="anonymous">';
    $GLOBALS['TL_HEAD'][] = '<script defer src="https://pro.fontawesome.com/releases/v5.15.2/js/all.js" integrity="sha384-ZbBwfM248+qoG5GJvuV2PmK9gvlW3dXpgC/jeIn45pWWroL3v+5K1ZAth+gs165y" crossorigin="anonymous" data-auto-replace-svg="nest"></script>';

    // Select2
    $GLOBALS['TL_HEAD'][] = '<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-rc.0/js/select2.min.js" integrity="sha512-4MvcHwcbqXKUHB6Lx3Zb5CEAVoE9u84qN+ZSMM6s7z8IeJriExrV3ND5zRze9mxNlABJ6k864P/Vl8m0Sd3DtQ==" crossorigin="anonymous"></script>';
    $GLOBALS['TL_HEAD'][] = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.1.0-rc.0/css/select2.min.css" />';

    // Animate
    //$GLOBALS['TL_JAVASCRIPT'][] = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
    //$GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css';
 
    // Google Webfonts
    $GLOBALS['TL_HEAD'][] = '<link rel="preconnect" href="https://fonts.gstatic.com">';
    $GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,600,700,800,900&display=swap&subset=latin-ext" rel="stylesheet">';
    // Vorschlag Buffoni Source Serif Pro
    //$GLOBALS['TL_HEAD'][] = '<link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">';

    // Embed Drag Sortable Plugin from https://rubaxa.github.io/Sortable/
    // JQuery UI does not go with popper.js
    // $GLOBALS['TL_JAVASCRIPT'][] = "https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js";
    $GLOBALS['TL_JAVASCRIPT'][] = "files/theme-sac-pilatus/js/third-party/Sortable.min.js|static";


    // Enable jqueryTouchSwipe
    //$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js";
    $GLOBALS['TL_JAVASCRIPT'][] = "files/theme-sac-pilatus/js/third-party/jquery.touchSwipe.min.js|static";

    // Load headroom.js https://github.com/WickyNilliams/headroom.js/
    //$GLOBALS['TL_HEAD'][] = '<script src="files/theme-sac-pilatus/js/headroom.js"></script>';

    // Load theme javascript file
    $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/equal-height.min.js|static';
    $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/theme.js|static';

    // Load flatpickr (datepicker)
    $GLOBALS['TL_HEAD'][] = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">';
    $GLOBALS['TL_HEAD'][] = '<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>';
    $GLOBALS['TL_HEAD'][] = '<script src="https://npmcdn.com/flatpickr/dist/l10n/de.js"></script>';

}
