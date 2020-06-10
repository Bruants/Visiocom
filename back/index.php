<?php
include_once 'url.php';
include_once 'config.php';
include_once 'router.php';
include_once 'api/requestAPI.php';
include_once 'api/apilink.php';

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Authorization, Content-Type");
    header("Access-Control-Allow-Methods: PUT, GET, DELETE, POST, OPTIONS");
    header("Content-Type: application/json");
    header("HTTP/1.1 200 ");
    exit;
}
$router = new Router($_GET['url']); 
$router->post('/users/authenticate', function(){ require("./api/login.php"); }); // login

$router->post('/users/register', function(){ require("./api/utilisateurs/create.php"); }); // inscription
$router->put('/users/:username', function($username){ require("./api/utilisateurs/put.php"); });    // modif d'un user
$router->delete('/users/:username', function($username){ require("./api/utilisateurs/deleteuser.php"); }); // Delete d'un user 
$router->get('/users/:username', function($username){ require("./api/utilisateurs/read.php"); }); // get d'un user

/* Trello */
$router->put('/api/trello/:username/:token', function($username, $token){ require("./api/trello/linkuser.php"); }); // Lien entre token trello et user
$router->get('/api/trello/:username/boards', function($username){ require("./api/trello/boards.php"); }); // Récupération des tableaux
$router->get('/api/trello/:username/boards/:board/lists', function($username, $board){ require("./api/trello/lists.php"); }); // Récupération des listes d'un tableau
$router->get('/api/trello/:username/lists/:list/cards', function($username, $list){ require("./api/trello/cards.php"); }); // Récupération des tâches d'une liste
$router->post('/api/trello/:username/cards', function($username){ require("./api/trello/addCards.php"); }); // Ajouter une carte dans une liste


$router->run(); 

?>