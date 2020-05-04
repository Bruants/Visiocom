<?php
include_once './router.php';

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Authorization");

    header("HTTP/1.1 200 ");
    exit;}
$router = new Router($_GET['url']); 
$router->post('/users/authenticate', function(){ require("./api/login.php"); }); // login

$router->post('/users/register', function(){ require("./api/utilisateurs/create.php"); }); // inscription
$router->put('/users/:username', function($username){ require("./api/utilisateurs/put.php"); });    // modif d'un user
$router->delete('/users/:username', function($username){ require("./api/utilisateurs/deleteuser.php"); }); // Delete d'un user 
$router->get('/users/:username', function($username){ require("./api/utilisateurs/read.php"); }); // get d'un user


$router->run(); 

?>