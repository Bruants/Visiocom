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
if (isset(getallheaders()["Authorization"]) || true) {
    $database = new Database();
    $db = $database->getConnection();
    
    // get posted data
    $data = json_decode(file_get_contents("php://input"));
    // make sure data is not empty
    if (!empty($data->name) && !empty($data->idBoard) && !empty($data->idList)) {
        $dataCards = array(
            "name: ".$data->name,
            "idBoard: ".$data->idBoard,
            "idList: ".$data->idList,
            "Content-Type: application/json"
        );
        $token = getToken($username, "trello");
        $request = new requestAPI();
        $curl = curl_init();
        echo $request->curl_post_request("https://api.trello.com/1/cards?key=".$GLOBALS['apiKeyTrello']."&token=".$token, $dataCards);//, $data);
    } else {
        // set response code - 400 bad request
        http_response_code(400);
        // tell the user
        echo json_encode(array("message" => "Unable to add card. Data is incomplete."));
    }
} else {
    // set response code - 404 Not found
    http_response_code(401);
    // tell the user no products found
    echo json_encode(
        array("message" => "You need to connect to add a new card")
    );
}
?>