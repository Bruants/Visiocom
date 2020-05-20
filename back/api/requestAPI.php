<?php
class RequestAPI {
    /**
     * Effectue une requête PUT
     * @param url le lien où l'action doit être effectuée
     * @return reponse de la requête
     */
    function curl_put_request($url) {
        return curl_request($url, 'put');
    }

    /**
     * Effectue une requête GET
     * @param url le lien où l'action doit être effectuée
     * @return reponse de la requête
     */
    function curl_get_request($url) {
        return curl_request($url, 'get');
    }

    /**
     * Effectue une requête POST
     * @param url le lien où l'action doit être effectuée
     * @return reponse de la requête
     */
    function curl_post_request($url) {
        return curl_request($url, 'post');
    }


    /**
     * Effectue une requête via curl
     * @param url le lien où l'action doit être effectuée
     * @param method le type d'action (GET / POST / PUT...)
     * @return reponse de la requête
     */
    function curl_request($url, $method) {
        try {
            $curl = curl_init();
          
            curl_setopt_array($curl, array(
              CURLOPT_URL => $url,
              CURLOPT_RETURNTRANSFER => true,
              CURLOPT_ENCODING => "",
              CURLOPT_MAXREDIRS => 10,
              CURLOPT_TIMEOUT => 0,
              CURLOPT_FOLLOWLOCATION => true,
              CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
              CURLOPT_CUSTOMREQUEST => $method,
              CURLOPT_SSL_VERIFYHOST => $GLOBALS['CertificateCacertLocation'],
              CURLOPT_SSL_VERIFYPEER => $GLOBALS['CertificateCacertLocation'],
              CURLOPT_HTTPHEADER => array(
                "Cookie: dsc=a1e81600472da3de55e1a531af470bae85dde55d9aea5855c6b48a61ca123851"
              ),
            ));
          
            $response = curl_exec($curl);
            $err = curl_error($curl);
          
            curl_close($curl);
        } catch (Exception $e) {
            http_response_code(401);
            return json_encode(
              array(
                "error" => "cURL Error #: ".$e->getMessage()."\ncode error : ". $e->getCode()
              )
            );
        }

        if($response) {
            http_response_code(200);
            return $response;
        } else {
            http_response_code(401);
            return json_encode(
              array(
                "error" => "cURL Error #: ".$err
              )
            );
        }
    }
}
?>