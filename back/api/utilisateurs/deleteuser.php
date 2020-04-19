<?php

// entêtes requises
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// fichier de connexion à la base de données
include_once '../config/database.php';

// instance d'un objet utilisateur
include_once '../objects/utilisateurs.php';
include_once '../validate_token.php';

// récupère les données du json
$data = json_decode(file_get_contents("php://input"));

// Verify token 
if (isset(getallheaders()["Authorization"]) && !empty($data->username) && isValid(getallheaders()["Authorization"], $data->username) == true) {
    $database = new Database();
    $db = $database->getConnection();

    $utilisateur = new Utilisateurs($db);



    // vérifie que les données sont pas vide
    if (!empty($data->username)) {

        $utilisateur->username = $data->username;

        // suppression de l'utilisateur
        if ($utilisateur->delete()) {

            http_response_code(201);

            echo json_encode(array("message" => "Utilisateur has been deleted."));

        } else {
    
            http_response_code(503);
    
            echo json_encode(array("message" => "Unable to delete Utilisateur."));
        }
    } else {
    
        http_response_code(400);
    
        echo json_encode(array("message" => "Unable to delete utilisateur. Data is incomplete."));
    }
} else {
    // set response code - 404 Not found
    http_response_code(403);
    
    // tell the user no products found
    echo json_encode(
        array("message" => "Bearer token not found or incorrect")
    );
}

?>