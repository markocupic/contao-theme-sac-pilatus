<?php
if (TL_MODE == 'FE')
{
	// Head tags
	$GLOBALS['TL_HEAD'][] = '<meta name="author" content="Marko Cupic, Oberkirch">';
	$GLOBALS['TL_HEAD'][] = '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">';


	// Bootstrap.js  Load in layout
	//$GLOBALS['TL_JAVASCRIPT'][] = "https://code.jquery.com/jquery-3.2.1.slim.min.js";
	//$GLOBALS['TL_JAVASCRIPT'][] = "https://code.jquery.com/jquery-1.12.4.min.js";

	// Popper.js must be loaded before bootstrap.js
	$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js";

	// Bootstrap.js
	$GLOBALS['TL_JAVASCRIPT'][] = "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js";

	// Icheck
	$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/iCheck/1.0.2/icheck.min.js";
	$GLOBALS['TL_CSS'][] = "https://cdnjs.cloudflare.com/ajax/libs/iCheck/1.0.2/skins/square/green.css";

	// Bootstrap datepicker
	$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.min.js";
	$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/locales/bootstrap-datepicker.de.min.js";
	$GLOBALS['TL_CSS'][] = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker.standalone.css";

	// Load FontAwesome
	$GLOBALS['TL_JAVASCRIPT'][] = "https://use.fontawesome.com/926b4fc2c0.js";

	// Animate
	$GLOBALS['TL_JAVASCRIPT'][] = 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
	$GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css';

	// Fonts
	// Ubuntu
	$GLOBALS['TL_CSS'][] = 'https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i';

	// Slick: The last slider yo ever need
	//$GLOBALS['TL_JAVASCRIPT'][] = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.js';
	//$GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.css';
	//$GLOBALS['TL_CSS'][] = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.css';


	// Embed JQuery UI
	// !!!! But do not select the Datepicker Widget, because there is a conflict with the bootstrap Datepicker from eternicode
	// http://jqueryui.com/download/
	//$GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/jquery-ui/jquery-ui.min.js';


	// Embed jQuery touch swipe
	$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.18/jquery.touchSwipe.min.js";

	// Enable dragging on touch screens
	$GLOBALS['TL_JAVASCRIPT'][] = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js";

	// Load theme javascript file
	$GLOBALS['TL_JAVASCRIPT'][] = 'files/theme-sac-pilatus/js/theme.js';

}
