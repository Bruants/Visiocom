<?php
include_once '../requestAPI.php';
$request = new requestAPI();
#echo $request.curl_put_request("https://api.trello.com/1/members/me/boards?key=".$GLOBALS['apiKeyTrello']."&token=".$token);
?>