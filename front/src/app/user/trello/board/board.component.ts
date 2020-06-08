import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { UserService } from '../../auth/user.service';
import { TrelloService } from '../request/trello.service';
import { ActivatedRoute } from '@angular/router';
import { List } from '../list/list.component';
import { Trello } from 'src/app/shared/trello.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  currentUser : User;
  currentTrello : Trello;
  id :string;
  lists : List[];
  
  constructor(private route: ActivatedRoute, private trelloService : TrelloService,private authService : AuthService) {
   this.authService.currentUser.subscribe(x => this.currentUser = x);
   this.currentTrello = new Trello();
   this.currentTrello.username = this.currentUser.username;

   /* this.list = this.trelloService.getList(this.currentTrello); TODO back */
    this.lists = [
      {
         "id": "5e2b249385a57b4855ccf8f9",
         "name": "Product Backlog",
         "closed": false,
         "pos": 65535,
         "softLimit": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "subscribed": false
      },
      {
         "id": "5e2b24981743ac6a5bc32bf9",
         "name": "Sprint (05/05/2020 au 19/05/2020) - A faire",
         "closed": false,
         "pos": 131071,
         "softLimit": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "subscribed": false
      },
      {
         "id": "5e2b24a320157e75eaa8ddaf",
         "name": "En cours",
         "closed": false,
         "pos": 196607,
         "softLimit": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "subscribed": false
      },
      {
         "id": "5e2b24a795367c8ab8a64e78",
         "name": "Fait",
         "closed": false,
         "pos": 262143,
         "softLimit": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "subscribed": false
      },
      {
         "id": "5e2b24d4024d21497286187b",
         "name": "Validés par la MOA",
         "closed": false,
         "pos": 327679,
         "softLimit": null,
         "idBoard": "5e2b246c2b38a818d80b3940",
         "subscribed": false
      }
   ];
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.id = this.route.snapshot.params.id;
  }

}

export interface Board {
  name:string;
  id:string;
  url:string;
};