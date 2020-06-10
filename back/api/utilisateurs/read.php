<?php
// required headers
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Authorization");

// include database and object files
include_once './api/config/database.php';
  
// instantiate utilisateur object
include_once './api/objects/utilisateurs.php';  
include_once './api/validate_token.php';

// Verify token 
if (isset(getallheaders()["Authorization"]) && isValid(getallheaders()["Authorization"], $username) == true) {
    // instantiate database and utilisateurs object
    $database = new Database();
    $db = $database->getConnection();
    // initialize object
    $utilisateurs = new Utilisateurs($db);
    
    // read utilisateurs will be here
    // query utilisateurs
        $utilisateurs->username = $username;
        $stmt = $utilisateurs->read();
        $num = $stmt->rowCount();
        
        // check if more than 0 record found
        if($num>0 ){
        
            // utilisateurs array
            $utilisateurs_arr=array();
            $utilisateurs_arr["records"]=array();
        
            // retrieve our table contents
            // fetch() is faster than fetchAll()
            // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                // extract row
                // this will make $row['name'] to
                // just $name only
                extract($row);
        
                $utilisateurs_item=array(
                    "name" => $name,
                    "username" => $username,
                    "firstName" => $firstName,
                    "mail" => $mail,
                    "phone" => $phone
                );
            }
        
            // set response code - 200 OK
            http_response_code(200);
        
            // show utilisateurs data in json format
            echo json_encode($utilisateurs_item);
        } else{
        
            // set response code - 404 Not found
            http_response_code(404);
        
            // tell the user no products found
            echo json_encode(
                array("message" => "No users founds.")
            );
        }


} else {
    // set response code - 404 Not found
    http_response_code(403);
    
    // tell the user no products found
    echo json_encode(
        array("message" => "Bearer token not found or incorrect")
    );
}
// no utilisateurs found will be here
