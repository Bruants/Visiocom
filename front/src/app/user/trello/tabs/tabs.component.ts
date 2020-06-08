import { Component, OnInit } from '@angular/core';
import { TrelloService } from '../request/trello.service';
import { AuthService } from 'src/app/core/auth.service';
import { User } from 'src/app/shared/user.model';
import { Board } from '../board/board.component';
import { Trello } from 'src/app/shared/trello.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit {
  currentUser : User;
  tabs : Board[];
  currentTrello : Trello;

  constructor(private trelloService : TrelloService,private authService : AuthService) { 
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    this.currentTrello = new Trello();
    this.currentTrello.username = this.currentUser.username;

    /* this.tabs = this.trelloService.getTabs(this.currentTrello); TODO back */
    this.tabs = [
      {
       "name": "Greatest Product Roadmap",
       "id": "5b6893f01cb3228998cf629e",
       "url": "https://trello.com/b/Fqd6NosI/greatest-product-roadmap",
      },
      // ... There may be a lot of boards here if you've been using
      // Trello a lot!
      {
        "name": "Never ending Backlog",
        "id": "5b689b3228998cf3f01c629e",
        "url": "https://trello.com/b/pLu77kV7/neverending-backlog"
      },
      {
        "name": "3T Board 5/21/2018",
        "id": "5b6893f998cf62901cb3228e",
        "url": "https://trello.com/b/b3wi9yUu/3t-board-5-21-2018"
      }
    ];
  }

  ngOnInit(): void {
  }

}
