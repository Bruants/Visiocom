import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trello } from 'src/app/shared/trello.model';
import { environment } from 'src/environments/environment';
import { ReturnMessage } from 'src/app/shared/return-message.model';
import { Board } from '../board/board.component';
import { List } from '../list/list.component';
import { Card } from '../card/card.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {

  constructor(private http: HttpClient) { }

  modify(trello: Trello) {
    return this.http.put<ReturnMessage>(`${environment.apiUrl}/api/trello/${trello.username}/${trello.tokenTrello}`, {headers: { 'Content-Type': 'application/json' }});
  }

  getTabs(trello : Trello) : Observable<Board[]>{
    return this.http.get<Board[]>(`${environment.apiUrl}/api/trello/${trello.username}/boards`, {headers: { 'Content-Type': 'application/json' }})
  }

  getList(trello : Trello) : Observable<List[]>{
    return this.http.get<List[]>(`${environment.apiUrl}/api/trello/${trello.username}/boards/${trello.board}/lists`, {headers: { 'Content-Type': 'application/json' }});
  }

  getCards(trello : Trello) : Observable<Card[]>{
    return this.http.get<Card[]>(`${environment.apiUrl}/api/trello/${trello.username}/lists/${trello.list}/cards`, {headers: { 'Content-Type': 'application/json' }});
  }
} 
