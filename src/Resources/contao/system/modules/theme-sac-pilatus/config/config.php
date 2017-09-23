<?php
if (TL_MODE == 'FE')
{
    // Load FontAwesome
    $GLOBALS['TL_JAVASCRIPT'][] = "https://use.fontawesome.com/926b4fc2c0.js";

    // Tether (must be loaded before bootstrap)
    $GLOBALS['TL_JAVASCRIPT'][] = 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js';
    $GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/css/tether-theme-arrows-dark.min.css';

    // Bootstrap
    $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/bootstrap/dist/js/bootstrap.min.js';

    // Animate
    $GLOBALS['TL_JAVASCRIPT'][] = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
    $GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css';

    // Slick: The last slider yo ever need
    $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/slick-slider/slick/slick.min.js';
    $GLOBALS['TL_CSS'][] = 'files/theme-sac-pilatus/slick-slider/slick/slick-theme.css';
    $GLOBALS['TL_CSS'][] = 'files/theme-sac-pilatus/slick-slider/slick/slick.css';

    // Load theme javascript file
    $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/theme.js';

    // Embed JQuery UI
<<<<<<< HEAD
    // Get jquery-ui !!!! But do not select the Datepicker Widget, because there is a conflict with the bootstrap Datepicker from eternicode
    $GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/jquery-ui/jquery-ui.min.js';

=======
    $GLOBALS['TL_HEAD'][] = '<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>';
>>>>>>> 0b0a3ddc437f6c6f76c662ed9de2456729403b0c

    // Embed jQuery touch swipe
    $GLOBALS['TL_HEAD'][] = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js"></script>';
    // Enable dragging on touch screens
    $GLOBALS['TL_HEAD'][] = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>';

}
