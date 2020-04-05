
##

  

# Contrats JSON

## 1) Lister les utilisateurs Sommaire

  

### 1.1) Détails récupération des utilisateurs....................................................................................................................................... .

  

**GET /users** : tableau de « user »

Un « user » :

  

* username : string (identifiant)

* password : string

* firstName : string

* name : string

* mail : string

* phone : string

* events : tableau de « event »

  

**GET /users/[username]/events** : tableau de « event»

Un « event » :

  

* id : int (identifiant)

* title : string

* description : string

* start_date : string

* end_date : string

* tasks : tableau de « task »

* files : tableau de « file

  

### 1.2) Détails récupération des évènements de type « tâche »

  

**GET /users/[username]/events/[id]/tasks** : tableau de « task»

Un « task » :

  

* id : int (identifiant)

* designation : string

* type : string

  

**GET /users/[username]/events/[id]/files** : tableau de « file»

Un « file » :

  

* id : int (identifiant)

* title : string

* url : string

  

### 1.3) Exemple

	[
	{
	"username": "corentin.goyat",

	"password": "92872@E",

	"firstName": "Corentin",

	"name": "GOYAT",

	"mail": "corentin.goyat@iut-rodez.fr",

	"phone": "05.76.72.34.21",

	"events": [

	{

	"id": 1 ,

	"title": "Réaliser une API REST",

	"description": "Réaliser une API REST pour le site de démonstration",

	"start_date": "03/03/2020 09:00",

	"end_date": "20/03/2020 17:15",

	"taks": [

	{

	"id": 1 ,

	"designation": "Spécification",

	"type": "terminé"

	},

	{

	"id": 2 ,

	"designation": "Conception",

	"type": "terminé"

	},

	{

	"id": 3 ,

	"designation": "Développement",

	"type": "terminé"

	}

	],

	"files": [

	{

	"id": 1 ,

	"title": "Spécifications générales",

	"url": "/files/project_java/spec_general.pdf"

	},

	{

	"id": 2 ,

	"title": "Spécifications détaillées",

	"url": "/files/project_java/spec_details.pdf"

	}

	]

	},

	{

	"id": 2 ,

	"title": "Commande infrastructure",

	"description": "Commander les serveurs nécessaires pour faire le site",

	"start_date": "21/03/2020 10:00",

	"end_date": "05/04/2020 17:15",

	"taks": [

	{

	"id": 1 ,

	"designation": "Spécification",

	"type": "terminé"

	},

	{

	"id": 2 ,

	"designation": "Conception",

	"type": "en cours"

	},

	{

	"id": 3 ,

	"designation": "Développement",

	"type": "non commencé"

	}

	],

	"files": []

	}

	]

	}

	]

  

## 2) Lister les projets

  

### 2.1) Détails récupération des projets

  

**GET /projects** : tableau de « project»

Un « project » :

  

* id : int (identifiant)

* title : string

* description : string

* start_date : string

* end_date : string

* opened : boolean

* lists : tableau de « list »

* users : tableau de « user »

* files : tableau de « file »

  

**GET /projects/[id]/lists** : tableau de « list »

Un « list » :

  

* id : int (identifiant)

* designation : string

* events : tableau de « event »

  

**GET /projects/[id]/users** : tableau de « user »

Un « user » :

  

* username : string (identifiant)

* firstName : string

* name : string

* mail : string

* phone : string

  

**GET /projects/[id]/files** : tableau de « file »

Un « file » :

  

* id : int (identifiant)

* title : string

* url : string

  

### 2.2) Détails récupération des listes d’un Kanban

  

**GET /projects/[id]/lists/[id]/events** : tableau de « event »

Un « event » :

  

* id : int (identifiant)

* title : string

* description : string

* start_date : string

* end_date : string

* tasks : tableau de « task »

* files : tableau de « file »

* users : tableau de « user »

  

**GET /projects/[id]/lists/[id]/events/[id]/tasks** : tableau de « task »

Un « task » :

  

* id : int (identifiant)

* designation : string

* type : string

  

**GET /projects/[id]/lists/[id]/events/[id]/files** : tableau de « file »

Un « file » :

  

* id : int (identifiant)

* title : string

* url : string

  

**GET /projects/[id]/lists/[id]/events/[id]/users** : tableau de « user »

Un « user » :

  

* username : string (identifiant)

  

### 2.3) Exemple

	[

	{

	"id": 1,

	"title": "Projet Java",

	"description": "Réalisation d'un serveur avec l'utilisation du langage java",

	"start_date": "16/01/2020",

	"end_date": "26/06/2020",

	"opened": true,

	"lists": [

	{

	"id": 1,

	"designation": "Backlog",

	"events": [

	{

	"id": 3,

	"title": "Migration serveurs",

	"description": "Migrer les serveurs",

	"start_date": "05/04/2020 10:00",

	"end_date": "10/04/2020 17:15",

	"taks": [

	{

	"id": 1,

	"designation": "Développement",

	"type": "en cours"

	}

	],

	"files": [],

	"users": [

	{

	"username": "corentin.goyat"

	},

	{

	"username": "alexis.vivier"

	}

	]

	}

	]

	},

	{

	"id": 2,

	"designation": "TODO",

	"events": [

	{

	"id": 1,

	"title": "Réaliser une API REST",

	"description": "Réaliser une API REST pour le site de démonstration",

	"start_date": "03/03/2020 09:00",

	"end_date": "20/03/2020 17:15",

	"taks": [

	{

	"id": 1,

	"designation": "Spécification",

	"type": "terminé"

	},

	{

	"id": 2,

	"designation": "Conception",

	"type": "terminé"

	},

	{

	"id": 3,

	"designation": "Développement",

	"type": "terminé"

	}

	],

	"files": [

	{

	"id": 1,

	"title": "Spécifications générales",

	"url": "/files/project_java/spec_general.pdf"

	},

	{

	"id": 2,

	"title": "Spécifications détaillées",

	"url": "/files/project_java/spec_details.pdf"

	}

	],

	"users": [

	{

	"username": "corentin.goyat"

	}

	]

	},

	{

	"id": 2,

	"title": "Commande infrastructure",

	"description": "Commander les serveurs nécessaires pour faire le site",

	"start_date": "21/03/2020 10:00",

	"end_date": "05/04/2020 17:15",

	"taks": [

	{

	"id": 1,

	"designation": "Spécification",

	"type": "terminé"

	},

	{

	"id": 2,

	"designation": "Conception",

	"type": "en cours"

	},

	{

	"id": 3,

	"designation": "Développement",

	"type": "non commencé"

	}

	],

	"files": [],

	"users": [

	{

	"username": "corentin.goyat"

	},

	{

	"username": "alexis.vivier"

	}

	]

	}

	]

	}

	],

	"user": [

	{

	"username": "corentin.goyat",

	"firstName": "Corentin",

	"name": "GOYAT",

	"mail": "corentin.goyat@iut-rodez.fr",

	"phone": "05.76.72.34.21"

	},

	{

	"username": "alexis.vivier",

	"firstName": "Alexis",

	"name": "VIVIER",

	"mail": "alexis.vivier@iut-rodez.fr",

	"phone": "07.83.26.92.01"

	}

	],

	"files": [

	{

	"id": 1,

	"title": "Burn Down Chart",

	"url": "/files/project_java/burn_down_chart.csv"

	},

	{

	"id": 2,

	"title": "Gestion des anomalies",

	"url": "/files/project_java/gestion_anomalies.csv"

	}

	]

	}

	]

## 3) Lister les modifications

  

### 3.1) Détails récupération des modifications faites

  

**GET /commits** : tableau de « commit »

Un « commit » :

  

* id : int (identifiant)

* title : string

* description : string

* nameFile : string

* type : string

* user : string

* event : int

  

### 3.2) Exemple
	[

		{

			"id": 1 ,

			"title": "Création Java",

			"description": "Création des fichiers sources",

			"type": "create",

			"user": "alexis.vivier",

			"event": 2

		},

		{

			"id": 2 ,

			"title": "Fichiers de tests",

			"description": "Modifications des class de tests : ajout des scénarios",

			"type": "edit",

			"user": "alexis.vivier",

			"event": 2

		}

	]

	  

	  

## 4) Créer un utilisateur

  

### 4.1) Création de l’utilisateur

  

**POST /users/damien.avetta-raymond**

Exemple :

	[

		{

			"username": "damien.avetta-raymond",

			"password": "iut@€az_",

			"firstName": "Damien",

			"name": "AVETTA-RAYMOND",

			"mail": "damien.avetta-raymond@iut-rodez.fr",

			"phone": "06.72.82.20.91",

			"events": []

		}

	]

### 4.2) Création d’un évènement.........................................................................................................................................................

  

**POST /users/damien.avetta-raymond/events/ 1**

Exemple :

	[

		{

			"id": 1 ,

			"title": "COPIL",

			"description": "Comité de pilotage du projet Java",

			"start_date": "31/03/2020 16:00",

			"end_date": "31/03/2020 17:00",

			"taks": [],

			"files": []

		}

	]

  

## 5) Créer un projet

  

### 5.1) Création d’un projet

  

**POST /projects/**

Exemple :

	[
		{

			"id": 2 ,

			"title": "Projet Web 2.0",

			"description": "Réalisation d'un facilitateur de communication",

			"start_date": "20/03/2020",

			"end_date": "20/04/2020",

			"opened": true,

			"lists": [],

			"user": [],

			"files": []

		}
	]

  

### 5.2) Création d’une tâche

  

**POST /projects/2/events/ 4**

	Exemple :

	[
		{

			"id": 4 ,

			"title": "Création du projet Angular",

			"description": "Création du projet et ajout des composants nécessaires",

			"start_date": "02/04/2020 14:00",

			"end_date": "08/04/2020 18:15",

			"taks": [],

			"files": [],

			"users": []

		}
	]

  

### 5.3) Ajouter un ensemble de réalisations pour effectuer une tâche

  

**POST /projects/2/events/ 4 /tasks/**

Exemple :

	[
		{
			"id": 1 ,

			"designation": "Développement",

			"type": "non commencé"
		}
	]


### 5.4) Ajouter des fichiers (livrables) à une tâche

  

**POST /projects/2/events/ 4 /files/**

Exemple :

	[
		{
			"id": 1 ,

			"title": "Conception",

			"url": "/files/project_web_2.0 /diagramme_classe.png"

		}
	]

		  

### 5.5) Attribuer des personnes à une tâche

		  
**POST /projects/2/events/ 4 /users/damien.avetta-raymond**

Exemple :

		[
			{
				"username": "damien.avetta-raymond"
			}
	]

  

### 5.6) Ajout d’une ressource externe

  

**POST /projects/2/files/**

Exemple :

	[

		{

			"id": 1 ,

			"title": "Répartition des taches",

			"url": "/files/project_web_2.0/repartition.csv"

		}

	]

  

  

## 6) Ajouter une modification

  

**POST /commits/ 3**

Exemple :

	[
		{
			"id": 3 ,

			"title": "Création Angular",

			"description": "Création des fichiers sources du projet Angular",

			"type": "create",

			"user": "damien.avetta-raymond",

			"event": 4
		}
	]