import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/user.model';
import { ReturnMessage } from 'src/app/shared/return-message.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`, {headers: { 'Content-Type': 'application/json' }});
    }

    get(username :string){
        return this.http.get<User>(`${environment.apiUrl}/users/${username}`, {headers: { 'Content-Type': 'application/json' }});
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user, {headers: { 'Content-Type': 'application/json' }});
    }

    delete(username: string) {
        return this.http.delete(`${environment.apiUrl}/users/${username}`, {headers: { 'Content-Type': 'application/json' }});
    }

    modify(user: User) : Observable<ReturnMessage> {
        return this.http.put<ReturnMessage>(`${environment.apiUrl}/users/${user.username}`, user, {headers: { 'Content-Type': 'application/json' }});
    }
}