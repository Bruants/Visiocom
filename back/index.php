<?php
include_once './router.php';

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    header("HTTP/1.1 200 ");
    exit;}
$router = new Router($_GET['url']); 
$router->post('/users/authenticate', function(){ require("./api/login.php"); }); // login

$router->post('/users/register', function($username){ require("./api/utilisateurs/create.php"); }); // inscription
$router->put('/users/:username', function($username){ require("./api/utilisateurs/put.php"); });    // modif d'un user
$router->delete('/users/:username', function($username){ require("./api/utilisateurs/deleteuser.php"); }); // Delete d'un user 
$router->get('/users/:username', function($username){ header("Location: http://localhost/api/utilisateurs/read.php?username=$username", true); }); // get d'un user


$router->run(); 

?>