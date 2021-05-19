<?php
///////////autoload function//////

spl_autoload_register(function ($class) {

    if (stristr($class, "Controller")) {
        require "controllers/" . $class . ".php";
    } else {
        require "models/" . $class . ".php";
    }
});

/////////loading pages //////////////////

if (!isset($_GET['page'])) {
    //loading home page
    $controller = new HomeController();
    $controller->displayfrench();
} else {
    switch ($_GET['page']) {

        case 'french':
            $controller = new HomeController();
            $controller->displayfrench();
            break;
        case 'english':
            $controller = new HomeController();
            $controller->displayenglish();
            break;
        case 'arabic':
            $controller = new HomeController();
            $controller->displayarabic();
            break;

    }
}