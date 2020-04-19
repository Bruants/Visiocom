<?php
// required headers
header("Access-Control-Allow-Origin: http://localhost/rest-api-authentication-example/");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// files for decoding jwt will be here

// required to decode jwt
use \Firebase\JWT\JWT;

function isValid($authHeader, $username) {
    include_once 'config/core.php';
    include_once 'libs/php-jwt-master/src/BeforeValidException.php';
    include_once 'libs/php-jwt-master/src/ExpiredException.php';
    include_once 'libs/php-jwt-master/src/SignatureInvalidException.php';
    include_once 'libs/php-jwt-master/src/JWT.php';
    $arr = explode(" ", $authHeader);
    if(sizeof($arr) < 2) {
        return false;
    }
    $jwt = $arr[1];
    if($jwt){
        // if decode succeed, show user details
        try {
            // decode jwt
            $decoded = JWT::decode($jwt, $key, array('HS256'));
            // set response code
            return strcmp($username,$decoded->username) == 0 ? true : false;
            
     
        }// if decode fails, it means jwt is invalid
        catch (Exception $e){
        
            // tell the user access denied  & show error message
            return false;
        }
    }
    else{
        return false;
    }
}

?>
