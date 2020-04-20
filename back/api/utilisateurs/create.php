<?php
// required headers
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
// get database connection
include_once './api/config/database.php';
  
// instantiate utilisateur object
include_once './api/objects/utilisateurs.php';  
include_once './api/validate_token.php';

// Verify token 
if (!isset(getallheaders()["Authorization"])) {
    $database = new Database();
    $db = $database->getConnection();
    
    $utilisateur = new Utilisateurs($db);
    
    // get posted data
    $data = json_decode(file_get_contents("php://input"));
    // make sure data is not empty
    if(
        !empty($data->username) &&
        !empty($data->password) &&
        !empty($data->firstName) &&
        !empty($data->name) &&
        !empty($data->mail) &&
        !empty($data->phone)
    ){
    
        // set utilisateur property values
        $utilisateur->username = $data->username;
        $utilisateur->passwordHashed = $data->password;
        $utilisateur->firstname = $data->firstName;
        $utilisateur->name = $data->name;
        $utilisateur->mail = $data->mail;
        $utilisateur->phone = $data->phone;
    
        // create the utilisateur
        if($utilisateur->create()){
    
            // set response code - 201 created
            http_response_code(201);
    
            // tell the user
            echo json_encode(array("message" => "Utilisateur was created."));
        }
    
        // if unable to create the utilisateur, tell the user
        else{
    
            // set response code - 503 service unavailable
            http_response_code(503);
    
            // tell the user
            echo json_encode(array("message" => "Unable to create Utilisateur."));
        }
    }
    
    // tell the user data is incomplete
    else{
    
        // set response code - 400 bad request
        http_response_code(400);
    
        // tell the user
        echo json_encode(array("message" => "Unable to create utilisateur. Data is incomplete."));
    }
} else {
    // set response code - 404 Not found
    http_response_code(401);
    
    // tell the user no products found
    echo json_encode(
        array("message" => "You need to disconnect to create a new account")
    );
}
?>