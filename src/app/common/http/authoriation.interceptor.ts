import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

import { InterceptorSkipHeader } from './headers';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    let cloned: HttpRequest<unknown>;
    if (token && !req.headers.has(InterceptorSkipHeader)) {
      cloned = req.clone({setHeaders: {
        'Authorization': `Bearer ${token}`
      }});
      cloned.headers.delete(InterceptorSkipHeader);
    } else {
      cloned = req.clone();
    }

    return next.handle(req);
  }
}
