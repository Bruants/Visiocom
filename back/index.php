<?php
include_once './router.php';

$router = new Router($_GET['url']); 
$router->get('/login', function(){ require("./api/login.php"); }); 

$router->post('/users/:username', function($username){ require("./api/utilisateurs/create.php"); }); 
$router->put('/users/:username', function($username){ require("./api/utilisateurs/put.php"); }); 
$router->delete('/users/:username', function($username){ require("./api/utilisateurs/deleteuser.php"); }); 
$router->get('/users/:username', function($username){ header("Location: http://localhost/api/utilisateurs/read.php?username=$username", true); });


$router->run(); 

?>