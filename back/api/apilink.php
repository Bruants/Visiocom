<?php

function tokenExist($username, $type) {
    // prepare query
    $database = new Database();
    $db = $database->getConnection();

    $sqlExist = "SELECT COUNT(*) FROM api_link WHERE username = :username AND api_type = :api_type";
    $searchToken = $db->prepare($sqlExist);
    $searchToken->execute(['username' => $username, 'api_type' => $type]);
    $resultat = $searchToken->fetch();
    return $resultat['COUNT(*)'] > 0;
}

function updateToken($username, $token, $type) {
    // prepare query
    $database = new Database();
    $db = $database->getConnection();

    $sqlUpdate = "UPDATE api_link SET api_token = :token WHERE username = :username AND api_type = :api_type";
    $updateToken = $db->prepare($sqlUpdate);
    return $updateToken->execute(['token' => $token, 'username' => $username, 'api_type' => $type]);
}

function apiLink($username, $token, $api){
    $query = "  INSERT INTO api_link 
                SET username=:username, api_type=:apiType, api_token=:apiToken";

    // prepare query
    $database = new Database();
    $db = $database->getConnection();
    $stmt = $db->prepare($query);
    
    // sanitize
    $token=htmlspecialchars(strip_tags($token));
    $username=htmlspecialchars(strip_tags($username));
    $api=htmlspecialchars(strip_tags($api));;


    // bind values
    $stmt->bindParam(":username", $username);
    $stmt->bindParam(":apiToken", $token);
    $stmt->bindParam(":apiType", $api);

    // execute query
    if($stmt->execute()){
        return true;
    }

    return false;

}

function getToken($username, $type) {
    $username = htmlspecialchars($username);
    $type = htmlspecialchars($type);
    $sqlToken = "SELECT api_token FROM api_link WHERE username = :username AND api_type = :api_type";
    $database = new Database();
    $db = $database->getConnection();
    $searchToken = $db->prepare($sqlToken);
    $searchToken->execute(['username' => $username, 'api_type' => $type]);
    $resultat = $searchToken->fetch();
    return $resultat['api_token'];
}

?>