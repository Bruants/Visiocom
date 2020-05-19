<?php

$apikey = '46a87a2c6f1a017e41b21e676c0db41c';

function linkTrello($username, $token) {
    include_once '../apilink.php';
    global $apikey;

    $curl = curl_init();
    
    if( !linkApi($username, $token, 'Trello')){
        return false;
    };
    
    //todo: verifier la connexion

    curl_setopt_array($curl, array(
      CURLOPT_URL => 'https://api.trello.com/1/members/me/boards?key='.$apikey.'&token='.$token,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "Cookie: dsc=d170a212c3891d98e7c5a095b6c2276fe66277052774df646c48f52e28696770"
      ),
    ));
    
    $response = curl_exec($curl);
    
    curl_close($curl);
    echo $response;
    
}

?>