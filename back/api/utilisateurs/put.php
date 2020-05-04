<?php
// required headers
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: Authorization");
  
// get database connection
include_once './api/config/database.php';
  
// instantiate utilisateur object
include_once './api/objects/utilisateurs.php';  
include_once './api/validate_token.php';
$data = json_decode(file_get_contents("php://input"));

// Verify token 
if (isset(getallheaders()["Authorization"]) && !empty($data->username) && isValid(getallheaders()["Authorization"], $data->username) == true) { 
    $database = new Database();
    $db = $database->getConnection();
    
    $utilisateur = new Utilisateurs($db);
    
    // get posted data
    if(
        !empty($data->password) &&
        !empty($data->firstName) &&
        !empty($data->name) &&
        !empty($data->mail) &&
        !empty($data->phone)
    ){
    
        // set utilisateur property val ues
        $utilisateur->username = $data->username;
        $utilisateur->passwordHashed = $data->password;
        $utilisateur->firstName = $data->firstName;
        $utilisateur->name = $data->name;
        $utilisateur->mail = $data->mail;
        $utilisateur->phone = $data->phone;
    
        // create the utilisateur
        if($utilisateur->put()){
    
            // set response code - 201 created
            http_response_code(201);
    
            // tell the user
            echo json_encode(array("message" => "Utilisateur was updated."));
        }
    
        // if unable to create the utilisateur, tell the user
        else{
    
            // set response code - 503 service unavailable
            http_response_code(503);
    
            // tell the user
            echo json_encode(array("message" => "Unable to update Utilisateur."));
        }
    }
    
    // tell the user data is incomplete
    else{
    
        // set response code - 400 bad request
        http_response_code(400);
    
        // tell the user
        echo json_encode(array("message" => "Unable to update utilisateur. Data is empty."));
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
