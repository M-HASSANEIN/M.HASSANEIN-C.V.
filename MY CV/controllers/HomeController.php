<?php

class HomeController
{
    public function displayfrench()
    {

        //loading template
        $title = "M.HASSANEIN.FR";
        $template = 'french.phtml';
        include 'views/Layout.phtml';
    }
    public function displayenglish()
    {

        //loading template
        $title = "M.HASSANEIN.EN";
        $template = 'english.phtml';
        include 'views/Layout.phtml';
    }
    public function displayarabic()
    {

        //loading template
        $title = "M.HASSANEIN.AR";
        $template = 'arabic.phtml';
        include 'views/Layout.phtml';
    }

}