<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include_once './api/config/database.php';
include_once './api/objects/utilisateurs.php';

include_once './api/config/core.php';
include_once './api/libs/php-jwt-master/src/BeforeValidException.php';
include_once './api/libs/php-jwt-master/src/ExpiredException.php';
include_once './api/libs/php-jwt-master/src/SignatureInvalidException.php';
include_once './api/libs/php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;
$data = json_decode(file_get_contents("php://input"));

if( !empty($data->username) && !empty($data->password) ) {

    $database = new Database();
    $db = $database->getConnection();
    $utilisateurs = new Utilisateurs($db);

    // initialize object
    $utilisateurs->username = $data->username;
    $stmt = $utilisateurs->read();
    // assign values to object properties
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        if(password_verify ( $data->password, $passwordHashed )) {
            $token = array(
                "iss" => $iss,
                "aud" => $aud,
                "iat" => $iat,
                "username" => $data->username,
            );
                // set response code
                http_response_code(200);
            
                // generate jwt
                $jwt = JWT::encode($token, $key);
                echo json_encode(
                        array(
                            "token" => $jwt,
                            "username" => $data->username,
                            "firstName" => $row["firstName"],
                            "name" => $row["name"],
                            "phone" => $row["phone"],
                            "mail" => $row["mail"]
                        )
                    );
        } else {
            http_response_code(401);

            echo json_encode(
                array(
                    "error" => "Username or password invalid"
                )
            );
        }
    }

}

?>