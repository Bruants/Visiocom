# Installation du back

## 1) Télécharger UwAmp


Lien de télchargement : http://www.uwamp.com/fr/


## 2) Mise en place du back


Mettez le contenu qui se trouve dans le dossier "back" dans le dossier "www" du répertoire UwAmp précédemment installé


## 3) Importation de la Base de données

Allumez UwAmp (si vous utilisez un WAMP, LAMP ou MAMP, vérifiez bien que tout est éteint et que le port 80 n'est pas utilisé),

Accèdez à localhost/mysql/ 

Identifiant de connexion : "root"

Mot de passe de connexion : "root"

Vous arriverez sur PHPMyAdmin. Allez dans "Importer" sur la partie droite, faites "parcourir" et sélectionnez le schema_bd.sql. Puis faites "Exécuter".

La base de données est importée.

UwAmp doit toujours être allumé pendant que vous utilisez le site.




# Installation du front

## 1) Méthode 1 => utiliser une archive déjà build

Décompressez l'archive.

Allumez Visual Studio Code, allez dans => File => Open Folder et placez-vous dans le dossier extrait.

Cliquez sur View => Terminal.

Puis dans le terminal en bas, faites "npm install" pour installer les dépendances

Puis "cd dist"

Puis "ng serve --open" pour ouvrir le serveur


## 2) Méthode 2 => build manuellement

Allumez Visual Studio Code, allez dans => File => Open Folder et placez-vous dans le dossier front.

Cliquez sur View => Terminal.

Puis dans le terminal en bas, faites "npm install" pour installer les dépendances

Puis "ng build --prod" pour build.

Puis "cd dist"

Et enfin : "ng serve --open" pour ouvrir le serveur