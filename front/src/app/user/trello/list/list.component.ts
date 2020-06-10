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
 
    this.trelloService.getCards(this.currentTrello).subscribe(x => this.cards = x);
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