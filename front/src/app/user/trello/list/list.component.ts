import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card/card.component';
import { TrelloService } from '../request/trello.service';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/shared/user.model';
import { Trello } from 'src/app/shared/trello.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  currentUser : User;
  currentTrello : Trello;

  @Input()
  list : List;

  cards : Card[];

  constructor(private trelloService : TrelloService,private authService : AuthService) {

   
   }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    this.currentTrello = new Trello();
    this.currentTrello.username = this.currentUser.username;
    console.log(this.list)
    this.currentTrello.board = this.list.idBoard;
    this.currentTrello.list = this.list.id;
 
    /* this.cards = this.trelloService.getCards(this.currentTrello); TODO back */
    this.cards = [
      {
         "id": "5eb194636701063c6e6a1195",
         "checkItemStates": null,
         "closed": false,
         "dateLastActivity": "2020-05-05T16:31:03.411Z",
         "desc": "Actualiser le profil apr├¿s avoir fait un put sur le backend.\nRevoir l'appel get",
         "descData": {
            "emoji": {}
         },
         "dueReminder": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "idList": "5e2b24981743ac6a5bc32bf9",
         "idMembersVoted": [],
         "idShort": 15,
         "idAttachmentCover": null,
         "idLabels": [
            "5e88473b84cb4361fad5674b"
         ],
         "manualCoverAttachment": false,
         "name": "G├®rer l'actualisation du profil apr├¿s modification",
         "pos": 409599,
         "shortLink": "x1NVK4KR",
         "isTemplate": false,
         "badges": {
            "attachmentsByType": {
               "trello": {
                  "board": 0,
                  "card": 0
               }
            },
            "location": false,
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 1,
            "checkItemsChecked": 0,
            "checkItemsEarliestDue": null,
            "comments": 0,
            "attachments": 0,
            "description": true,
            "due": null,
            "dueComplete": false
         },
         "dueComplete": false,
         "due": null,
         "idChecklists": [
            "5eb1947adc03f028e8ae0722"
         ],
         "idMembers": [],
         "labels": [
            {
               "id": "5e88473b84cb4361fad5674b",
               "idBoard": "5e2b246c2b38a818d80b3940",
               "name": "Front-end",
               "color": "blue"
            }
         ],
         "shortUrl": "https://trello.com/c/x1NVK4KR",
         "subscribed": false,
         "url": "https://trello.com/c/x1NVK4KR/15-g%C3%A9rer-lactualisation-du-profil-apr%C3%A8s-modification",
         "cover": {
            "idAttachment": null,
            "color": null,
            "idUploadedBackground": null,
            "size": "normal",
            "brightness": "light"
         }
      },
      {
         "id": "5eb19100197e4317c724993a",
         "checkItemStates": null,
         "closed": false,
         "dateLastActivity": "2020-05-05T16:33:56.962Z",
         "desc": "Cr├®ation d'une TO-DO list pour pouvoir tester la r├®cup├®ration des donn├®es depuis l'API trello\n\nNote du product owner :\n        Cr├®er une page angular accessible seulement si on est connect├® : TODO-LIST. Maquette, Cr├®er la liste todo dans le service. Simuler un observable r├®cup├®r├® de l'API gr├óce ├á la m├®thode Observable.of (d'angular). \n        Mettre ├á disposition un endpoint accessible seulement si le token est dans la requ├¬te qui permet de lister la todoList. (En +, si vous avez le temps, http://server.com/user/{id}/todo?sort=date, ajouter des param├¿tre de tri ou de filtre).\n    Angular peut acc├®der ├á cet endpoint mis ├á disposition. Au travers d'un composant bo├«te noire repr├®sentant la liste todo (exemple app-todo-list).\n\n\n<app-todo-list [sort]=\"+name\" ></app-todo-list>",
         "descData": {
            "emoji": {}
         },
         "dueReminder": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "idList": "5e2b24981743ac6a5bc32bf9",
         "idMembersVoted": [],
         "idShort": 10,
         "idAttachmentCover": null,
         "idLabels": [
            "5e88473b84cb4361fad5674b"
         ],
         "manualCoverAttachment": false,
         "name": "Cr├®er la page Trello en int├®grant une liste par d├®faut",
         "pos": 425983,
         "shortLink": "wWjxl4qx",
         "isTemplate": false,
         "badges": {
            "attachmentsByType": {
               "trello": {
                  "board": 0,
                  "card": 0
               }
            },
            "location": false,
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 3,
            "checkItemsChecked": 0,
            "checkItemsEarliestDue": null,
            "comments": 0,
            "attachments": 0,
            "description": true,
            "due": null,
            "dueComplete": false
         },
         "dueComplete": false,
         "due": null,
         "idChecklists": [
            "5eb1914b801dd328ed665ab5"
         ],
         "idMembers": [],
         "labels": [
            {
               "id": "5e88473b84cb4361fad5674b",
               "idBoard": "5e2b246c2b38a818d80b3940",
               "name": "Front-end",
               "color": "blue"
            }
         ],
         "shortUrl": "https://trello.com/c/wWjxl4qx",
         "subscribed": false,
         "url": "https://trello.com/c/wWjxl4qx/10-cr%C3%A9er-la-page-trello-en-int%C3%A9grant-une-liste-par-d%C3%A9faut",
         "cover": {
            "idAttachment": null,
            "color": null,
            "idUploadedBackground": null,
            "size": "normal",
            "brightness": "light"
         }
      },
      {
         "id": "5eb191f1405c7a46ca296e74",
         "checkItemStates": null,
         "closed": false,
         "dateLastActivity": "2020-05-05T16:31:09.222Z",
         "desc": "R├®cup├®rer les donn├®es du trello :\n- G├®n├®rer le nombre de listes en fonction de celles r├®cup├®r├®es\n- Et attribuer les t├óches correspondantes dans les listes",
         "descData": {
            "emoji": {}
         },
         "dueReminder": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "idList": "5e2b24981743ac6a5bc32bf9",
         "idMembersVoted": [],
         "idShort": 11,
         "idAttachmentCover": null,
         "idLabels": [
            "5e88473b84cb4361fad5674b"
         ],
         "manualCoverAttachment": false,
         "name": "R├®cup├®ration des donn├®es de l'API",
         "pos": 442367,
         "shortLink": "3Z47qah1",
         "isTemplate": false,
         "badges": {
            "attachmentsByType": {
               "trello": {
                  "board": 0,
                  "card": 0
               }
            },
            "location": false,
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 2,
            "checkItemsChecked": 0,
            "checkItemsEarliestDue": null,
            "comments": 0,
            "attachments": 0,
            "description": true,
            "due": null,
            "dueComplete": false
         },
         "dueComplete": false,
         "due": null,
         "idChecklists": [
            "5eb191f692a5276d199ffaef"
         ],
         "idMembers": [],
         "labels": [
            {
               "id": "5e88473b84cb4361fad5674b",
               "idBoard": "5e2b246c2b38a818d80b3940",
               "name": "Front-end",
               "color": "blue"
            }
         ],
         "shortUrl": "https://trello.com/c/3Z47qah1",
         "subscribed": false,
         "url": "https://trello.com/c/3Z47qah1/11-r%C3%A9cup%C3%A9ration-des-donn%C3%A9es-de-lapi",
         "cover": {
            "idAttachment": null,
            "color": null,
            "idUploadedBackground": null,
            "size": "normal",
            "brightness": "light"
         }
      },
      {
         "id": "5ec28c75addd3223ed9a5a36",
         "checkItemStates": null,
         "closed": false,
         "dateLastActivity": "2020-05-18T13:24:15.728Z",
         "desc": "",
         "descData": null,
         "dueReminder": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "idList": "5e2b24981743ac6a5bc32bf9",
         "idMembersVoted": [],
         "idShort": 17,
         "idAttachmentCover": null,
         "idLabels": [
            "5e88473b84cb4361fad5674b"
         ],
         "manualCoverAttachment": false,
         "name": "Repenser la bulle de notification",
         "pos": 499711,
         "shortLink": "sYzm9WMA",
         "isTemplate": false,
         "badges": {
            "attachmentsByType": {
               "trello": {
                  "board": 0,
                  "card": 0
               }
            },
            "location": false,
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 0,
            "checkItemsChecked": 0,
            "checkItemsEarliestDue": null,
            "comments": 0,
            "attachments": 0,
            "description": false,
            "due": null,
            "dueComplete": false
         },
         "dueComplete": false,
         "due": null,
         "idChecklists": [],
         "idMembers": [],
         "labels": [
            {
               "id": "5e88473b84cb4361fad5674b",
               "idBoard": "5e2b246c2b38a818d80b3940",
               "name": "Front-end",
               "color": "blue"
            }
         ],
         "shortUrl": "https://trello.com/c/sYzm9WMA",
         "subscribed": false,
         "url": "https://trello.com/c/sYzm9WMA/17-repenser-la-bulle-de-notification",
         "cover": {
            "idAttachment": null,
            "color": null,
            "idUploadedBackground": null,
            "size": "normal",
            "brightness": "light"
         }
      },
      {
         "id": "5eb192931a83bc14bbde0b6d",
         "checkItemStates": null,
         "closed": false,
         "dateLastActivity": "2020-05-05T16:34:19.021Z",
         "desc": "R├®cup├®rer les donn├®es de trello et traiter les ajouts / modifications conform├®ment au contrat JSON\n\nNote du product owner :\nbackend peut acc├®der ├á l'API trello.",
         "descData": {
            "emoji": {}
         },
         "dueReminder": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "idList": "5e2b24981743ac6a5bc32bf9",
         "idMembersVoted": [],
         "idShort": 13,
         "idAttachmentCover": null,
         "idLabels": [
            "5e884745e27e35107544a113"
         ],
         "manualCoverAttachment": false,
         "name": "Communiquer avec l'API trello",
         "pos": 557055,
         "shortLink": "J5MmVYlX",
         "isTemplate": false,
         "badges": {
            "attachmentsByType": {
               "trello": {
                  "board": 0,
                  "card": 0
               }
            },
            "location": false,
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 2,
            "checkItemsChecked": 0,
            "checkItemsEarliestDue": null,
            "comments": 0,
            "attachments": 0,
            "description": true,
            "due": null,
            "dueComplete": false
         },
         "dueComplete": false,
         "due": null,
         "idChecklists": [
            "5eb192b228bcc274d51980bd"
         ],
         "idMembers": [],
         "labels": [
            {
               "id": "5e884745e27e35107544a113",
               "idBoard": "5e2b246c2b38a818d80b3940",
               "name": "Back-end",
               "color": "sky"
            }
         ],
         "shortUrl": "https://trello.com/c/J5MmVYlX",
         "subscribed": false,
         "url": "https://trello.com/c/J5MmVYlX/13-communiquer-avec-lapi-trello",
         "cover": {
            "idAttachment": null,
            "color": null,
            "idUploadedBackground": null,
            "size": "normal",
            "brightness": "light"
         }
      },
      {
         "id": "5eb16efb14a173751c21d348",
         "checkItemStates": null,
         "closed": false,
         "dateLastActivity": "2020-05-05T16:31:25.406Z",
         "desc": "Passer la gestion du backend de Uwamp ├á Docker",
         "descData": {
            "emoji": {}
         },
         "dueReminder": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "idList": "5e2b24981743ac6a5bc32bf9",
         "idMembersVoted": [],
         "idShort": 9,
         "idAttachmentCover": null,
         "idLabels": [
            "5e884745e27e35107544a113",
            "5e2b246caf988c41f2191009"
         ],
         "manualCoverAttachment": false,
         "name": "Docker",
         "pos": 589823,
         "shortLink": "hxpVZZWa",
         "isTemplate": false,
         "badges": {
            "attachmentsByType": {
               "trello": {
                  "board": 0,
                  "card": 0
               }
            },
            "location": false,
            "votes": 0,
            "viewingMemberVoted": false,
            "subscribed": false,
            "fogbugz": "",
            "checkItems": 3,
            "checkItemsChecked": 0,
            "checkItemsEarliestDue": null,
            "comments": 0,
            "attachments": 0,
            "description": true,
            "due": null,
            "dueComplete": false
         },
         "dueComplete": false,
         "due": null,
         "idChecklists": [
            "5eb19486b237b516a91728f1"
         ],
         "idMembers": [],
         "labels": [
            {
               "id": "5e884745e27e35107544a113",
               "idBoard": "5e2b246c2b38a818d80b3940",
               "name": "Back-end",
               "color": "sky"
            },
            {
               "id": "5e2b246caf988c41f2191009",
               "idBoard": "5e2b246c2b38a818d80b3940",
               "name": "Non prioritaire",
               "color": "pink"
            }
         ],
         "shortUrl": "https://trello.com/c/hxpVZZWa",
         "subscribed": false,
         "url": "https://trello.com/c/hxpVZZWa/9-docker",
         "cover": {
            "idAttachment": null,
            "color": null,
            "idUploadedBackground": null,
            "size": "normal",
            "brightness": "light"
         }
      }
   ]
  }

}

export interface List {
    id: string,
    name: string,
    closed: boolean,
    pos: number,
    softLimit: any,
    idBoard: string,
    subscribed: boolean
}