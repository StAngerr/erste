import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const clone = req.clone({
        headers: req.headers.set('Authorization', 'JWT ' + token)
      });
      return next.handle(clone);
    } else {
      return next.handle(req);
    }
  }
}
