import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';

// TODO
const API_URL = "http://localhost:4200"

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('${environment.apiUrl}/users');
    }

    register(user: User) {
        return this.http.post('${environment.apiUrl}/users/register', user);
    }

    delete(username: string) {
        return this.http.delete('${environment.apiUrl}/users/${username}');
    }

    modify(user: User) {
        return this.http.put('${environment.apiUrl}/users/${user.username}', user);
    }
}