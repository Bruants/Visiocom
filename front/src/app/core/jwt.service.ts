import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Ajout d'une en-tête d'autorisation
        let tokenUser = this.authenticationService.tokenValue;
        if (tokenUser) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${tokenUser}`
                }
            });
        }

        return next.handle(request);
    }
}