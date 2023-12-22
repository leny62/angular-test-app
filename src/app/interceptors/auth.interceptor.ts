import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${environment.BEARER_TOKEN}`)
        });

        return next.handle(authReq)
    }
}