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
  }

  ngOnInit(): void {
      this.id = this.route.snapshot.params.id;
      this.authService.currentUser.subscribe(x => this.currentUser = x);
      this.currentTrello = new Trello();
      this.currentTrello.username = this.currentUser.username;
      this.currentTrello.board = this.id;
      this.trelloService.getList(this.currentTrello).subscribe(x=> this.lists = x);
  }

}

export interface Board {
  name:string;
  id:string;
  url:string;
};