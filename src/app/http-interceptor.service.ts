import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const role = localStorage.getItem('role');
    const modifiedReq = req.clone({
      headers: req.headers.set('Role', role ? role : ''),
    });

    return next.handle(modifiedReq);
  }
}