<?php
/**
 *	Redirige vers le bon dossier/fichier sur le serveur
 *  @param localisation : le chemin du fichier / dossier recherché à partir de la racine
 *  @return url l'URL complète permettant d'accéder au fichier/dossier 
 */
function url_head($localisation) {
    $protocol = explode('/', $_SERVER['SERVER_PROTOCOL']);
    $dossierRacine = explode('/', $_SERVER['REQUEST_URI']);
    $url = $protocol[0].'://'.$_SERVER["SERVER_NAME"].':'.$_SERVER["SERVER_PORT"].'/'.$dossierRacine[1].'/'.$localisation;
    return $url;
}
?>