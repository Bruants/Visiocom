<?php

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

?>