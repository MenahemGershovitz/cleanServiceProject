import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) { //la methode intercept renvoi un observable
        const authToken = AuthService.token;
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        });
        return next.handle(req);
    }
}