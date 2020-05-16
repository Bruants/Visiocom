# Contrats JSON

## 1) Lister les utilisateurs Sommaire

### 1.1) Détails récupération des utilisateurs

**GET /users** : tableau de "user"

Un "user" :

*   username : string (identifiant)

*   firstName : string

*   name : string

*   mail : string

*   phone : string

### 1.2) Exemple

    [
    {
        "username": "corentin.goyat",
        "firstName": "Corentin",
        "name": "GOYAT",
        "mail": "corentin.goyat@iut-rodez.fr",
        "phone": "05.76.72.34.21"
    }
    ]

### 1.3) Création de l’utilisateur

**POST /users/damien.avetta-raymond**

Exemple :

    [

        {

            "username": "damien.avetta-raymond",

            "password": "994ab52095316b9092f6b4a5c83c74d9cfee8b94",

            "firstName": "Damien",

            "name": "AVETTA-RAYMOND",

            "mail": "damien.avetta-raymond@iut-rodez.fr",

            "phone": "06.72.82.20.91"

        }

    ]

## 2) Gérer les calendrier

Obtenir un calendrier : **GET [https://www.googleapis.com/calendar/v3/calendars/{calendarId}](https://www.googleapis.com/calendar/v3/calendars/{calendarId})** : tableau de "calendar"

Un "calendar" : [https://developers.google.com/calendar/v3/reference/calendars/get](https://developers.google.com/calendar/v3/reference/calendars/get)

Créer un calendrier : **POST [https://www.googleapis.com/calendar/v3/calendars](https://www.googleapis.com/calendar/v3/calendars)**

Utilisation : [https://developers.google.com/calendar/v3/reference/calendars/insert](https://developers.google.com/calendar/v3/reference/calendars/insert)

Mise à jour d'un calendrier : **PATCH [https://www.googleapis.com/calendar/v3/calendars/{calendarId}](https://www.googleapis.com/calendar/v3/calendars/{calendarId})**

Utilisation : [https://developers.google.com/calendar/v3/reference/calendars/patch](https://developers.google.com/calendar/v3/reference/calendars/patch)

Supprimer un calendrier : **DELETE [https://www.googleapis.com/calendar/v3/calendars/{calendarId}](https://www.googleapis.com/calendar/v3/calendars/{calendarId})**

Utilisation : [https://developers.google.com/calendar/v3/reference/calendars/delete](https://developers.google.com/calendar/v3/reference/calendars/delete)

## 3) Gérer les projets

### 3.1) Lister les projets

Obtenir un projet : **GET api.trello.com/1/members/me/boards?fields=name,url&key={apiKey}&token={apiToken}** : tableau de "board"

Un "board" : [https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/)

Obtenir les listes d'un projet : **GET api.trello.com/1/boards/{id}/lists** : tableau de "list"

Un "list" : [https://developer.atlassian.com/cloud/trello/rest/#api-boards-id-lists-get](https://developer.atlassian.com/cloud/trello/rest/#api-boards-id-lists-get)

Obtenir les membres d'un projet : **GET api.trello.com/1/boards/{id}/memberships** : tableau de "membership"

Un "membership" : [https://developer.atlassian.com/cloud/trello/rest/#api-boards-id-memberships-get](https://developer.atlassian.com/cloud/trello/rest/#api-boards-id-memberships-get)

Obtenir les cartes d'une liste : **GET api.trello.com/1/boards/{id}/lists/cards** : tableau de "cards"

Un "card" : [https://developer.atlassian.com/cloud/trello/rest/#api-lists-id-cards-get](https://developer.atlassian.com/cloud/trello/rest/#api-lists-id-cards-get)

Obtenir les checklists d'une carte : **GET api.trello.com/1/boards/{id}/checklists/{id}** : tableau de "checklist"

Un "checklist" : [https://developer.atlassian.com/cloud/trello/rest/#api-boards-id-checklists-get](https://developer.atlassian.com/cloud/trello/rest/#api-boards-id-checklists-get)

Obtenir les fichiers d'une carte : **GET api.trello.com/1/boards/{id}/cards/{idCard}/attachments** : tableau de "attachment"

Un "attachment" : [https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-attachments-get](https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-attachments-get)

Obtenir les membres liés à une carte : **GET api.trello.com/1/boards/{id}/cards/{idCard}/members** : tableau de "member"

Un "member" : [https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-members-get](https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-members-get)

### 2.2) Modifier un projet

Créer un projet : **POST api.trello.com/1/boards/**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-boards-post](https://developer.atlassian.com/cloud/trello/rest/#api-boards-post)

Supprimer un projet : **DELETE api.trello.com/1/boards/{id}**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-boards-id-delete](https://developer.atlassian.com/cloud/trello/rest/#api-boards-id-delete)

Créer une liste : **POST api.trello.com/1/boards/{id}/lists**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-boards-id-lists-post](https://developer.atlassian.com/cloud/trello/rest/#api-boards-id-lists-post)

Supprimer une liste : **PUT api.trello.com/1/lists/{id}/closed**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-lists-id-closed-put](https://developer.atlassian.com/cloud/trello/rest/#api-lists-id-closed-put)

Créer une carte : **POST api.trello.com/1/boards/{id}/lists/{id}/cards**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-cards-post](https://developer.atlassian.com/cloud/trello/rest/#api-cards-post)

Supprimer une carte : **DELETE api.trello.com/1/cards/{id}**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-delete](https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-delete)

Mettre à jour une carte : **PUT api.trello.com/1/cards/{id}** Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-get](https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-get)

Ajouter un fichier à une carte : **POST api.trello.com/1/cards/{id}/attachments**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-attachments-post](https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-attachments-post)

Retirer un fichier d'une carte : **DELETE api.trello.com/1/cards/{id}/attachments/{idAttachment}**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-attachments-idAttachment-delete](https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-attachments-idAttachment-delete)

Ajouter une checklist à une carte : **POST api.trello.com/1/cards/{id}/checklists**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-checklists-post](https://developer.atlassian.com/cloud/trello/rest/#api-cards-id-checklists-post)

Supprimer une checklist d'une carte : **DELETE api.trello.com/1/checklists/{id}**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-checklists-id-delete](https://developer.atlassian.com/cloud/trello/rest/#api-checklists-id-delete)

Ajouter ou supprimer une tâche d'une checklist : **PUT api.trello.com/1/checklists/{id}/{field}**

Utilisation : [https://developer.atlassian.com/cloud/trello/rest/#api-checklists-id-field-put](https://developer.atlassian.com/cloud/trello/rest/#api-checklists-id-field-put)

Mettre à jour une checklist : **PUT api.trello.com/1/checklists/{id}**

Utilisation :[https://developer.atlassian.com/cloud/trello/rest/#api-checklists-id-put](https://developer.atlassian.com/cloud/trello/rest/#api-checklists-id-put)

## 4) Lister les modifications

**GET /repos/{owner}/{repo}/commits** : tableau de "commit"

Un "commit" : [https://developer.github.com/v3/git/commits/#get-a-commit](https://developer.github.com/v3/git/commits/#get-a-commit)