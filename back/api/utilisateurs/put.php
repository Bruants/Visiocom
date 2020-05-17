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

include_once './api/config/core.php';
include_once './api/libs/php-jwt-master/src/BeforeValidException.php';
include_once './api/libs/php-jwt-master/src/ExpiredException.php';
include_once './api/libs/php-jwt-master/src/SignatureInvalidException.php';
include_once './api/libs/php-jwt-master/src/JWT.php';
$data = json_decode(file_get_contents("php://input"));

// Verify token 
if (isset(getallheaders()["Authorization"]) && !empty($data->username) && isValid(getallheaders()["Authorization"], $data->username) == true) { 
    $database = new Database();
    $db = $database->getConnection();
    
    $utilisateur = new Utilisateurs($db);
    
    // get posted data
    if(
        !empty($data->firstName) &&
        !empty($data->name) &&
        !empty($data->mail) &&
        !empty($data->phone) && 
        !empty($data->password)
    ){

        // initialize object
        $utilisateurs = new Utilisateurs($db);
        $utilisateurs->username = $data->username;
        $stmt = $utilisateurs->read();
        // assign values to object properties
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            // extract row
            // this will make $row['name'] to
            // just $name only
            extract($row);

            if(password_verify ( $data->password, $passwordHashed )) {
                        
                // set utilisateur property val ues
                $utilisateur->username = $data->username;
                $utilisateur->firstName = $data->firstName;
                $utilisateur->name = $data->name;
                $utilisateur->mail = $data->mail;
                $utilisateur->phone = $data->phone;
                if(!empty($data->newPassword)) {
                    $utilisateur->passwordHashed = password_hash($data->newPassword, PASSWORD_DEFAULT);
                } else {
                    $utilisateur->passwordHashed = $passwordHashed;
                }

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
            } else {
                http_response_code(401);

                echo json_encode(
                    array(
                        "error" => "Invalid password"
                    )
                );
            }
        }
    }
} else {
    // set response code - 403 Unauthorized
    http_response_code(403);
    
    // tell the user no products found
    echo json_encode(
        array("message" => "Bearer token not found or incorrect")
    );
}
?>
