<?php
include_once './router.php';

$router = new Router($_GET['url']); 
$router->get('/', function(){ echo "Bienvenue sur ma homepage !"; }); 
$router->post('/users/:username', function($username){ require("./api/utilisateurs/create.php"); }); 
$router->get('/users/:username', function($username){ header("Location: http://localhost/api/utilisateurs/read.php?username=$username", true); }); 

$router->run(); 

?>