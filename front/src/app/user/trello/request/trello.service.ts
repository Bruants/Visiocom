import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trello } from 'src/app/shared/trello.model';
import { environment } from 'src/environments/environment';
import { ReturnMessage } from 'src/app/shared/return-message.model';
import { Board } from '../board/board.component';
import { List } from '../list/list.component';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {

  constructor(private http: HttpClient) { }



  modify(trello: Trello) {
    return this.http.put<ReturnMessage>(`${environment.apiUrl}/api/trello/${trello.username}`, trello, {headers: { 'Content-Type': 'application/json' }});
  }

  getTabs(trello : Trello) : Board[]{
    let result : Board[];
    this.http.get<Board[]>(`${environment.apiUrl}/api/trello/${trello.username}`, {headers: { 'Content-Type': 'application/json' }}).subscribe(x => result = x);
    return result;
  }

  getList(trello : Trello) : List[]{
    let result : List[];
    this.http.get<List[]>(`${environment.apiUrl}/1/boards/${trello.board}/lists`, {headers: { 'Content-Type': 'application/json' }}).subscribe(x => result = x);
    return result;
  }
} 
