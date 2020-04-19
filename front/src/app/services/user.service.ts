import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user.model';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:4200';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<User[]> {
      return this.http.get<User[]>(API_URL + '/users');
  }

  register(utilisateur: User) {
      return this.http.post(API_URL + '/users/register', utilisateur);
  }
}
