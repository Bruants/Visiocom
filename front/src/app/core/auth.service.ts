import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../shared/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public tokenValue: string;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.tokenValue = localStorage.getItem('token');
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username, password) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password }, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
                   .pipe(map(user => {
                        // Stocker les détails de l'utilisateur et le jeton JWT dans le stockage local
                        let infosUser: User = {
                            name:       user.name,
                            firstName:  user.firstName,
                            username:   user.username,
                            password:   user.password,
                            mail:       user.mail,
                            phone:      user.phone
                        };
                        console.log(infosUser);
                        localStorage.setItem('currentUser', JSON.stringify(infosUser));
                        localStorage.setItem('token', user.token);
                        
                        console.log(localStorage.getItem('currentUser'));
                        console.log(localStorage.getItem('token'));
                        this.currentUserSubject.next(user);
                        return user;
                    }));
    }

    logout() {
        // Suppression des données pour l'utilisateur courant dans le stockage local
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}