<?php
include_once '../requestAPI.php';
$token = '9833bfba95a0ae58fa9fba72da0c5c16d59368507c196c92058776fdc9dfdbb7';
$request = new requestAPI();
echo $request.curl_put_request("https://api.trello.com/1/members/me/boards?key=".$GLOBALS['apiKeyTrello']."&token=".$token);
?>