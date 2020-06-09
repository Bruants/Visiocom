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
include_once './api/validate_token.php';
include_once './api/config/core.php';

// Verify token 
if (isset(getallheaders()["Authorization"])) {
    $token = getToken($username, "trello");
    $request = new requestAPI();
    echo $request->curl_get_request("https://api.trello.com/1/members/me/boards?key=".$GLOBALS['apiKeyTrello']."&token=".$token);
} else {
    // set response code - 404 Not found
    http_response_code(401);
    // tell the user no products found
    echo json_encode(
        array("message" => "You need to connect to get boards")
    );
}
?>