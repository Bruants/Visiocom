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
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    this.currentTrello = new Trello();
    this.currentTrello.username = this.currentUser.username;

    this.trelloService.getTabs(this.currentTrello).subscribe(x => this.tabs = x);
  }

}
