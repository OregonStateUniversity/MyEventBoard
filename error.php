<?php

// set up session

require_once dirname(__FILE__) . '/config/session.php';

// set up connection to database via MySQLi

require_once dirname(__FILE__) . '/config/database.php';

// set up twig

require_once dirname(__FILE__) . '/config/twig.php';

// include functions for rendering view for errors

require_once dirname(__FILE__) . '/config/render_error.php';

// get error code from URL

$errorCode = $_GET["code"];

// render page using twig

render_error($twig, $errorCode, $errorMessages[$errorCode]);
