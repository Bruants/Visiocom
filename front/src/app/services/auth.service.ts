import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../classes/user.model';

const API_URL = 'http://localhost:4200';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(id, password) {
        return this.http.post<any>(API_URL + '/users/auth', { id, password })
        .pipe(map(user => {
            // garder les infos de l'utilisateur dans le stockage local
            // pour le maintenir connecté à travers les mises à jour de la page
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }

    logout() {
        // supprimer l'utilisateur précédent du stockage local
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}