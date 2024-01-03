import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token")
    const modifiedRequest = request.clone({
        headers: request.headers.set('x-auth-token', `${token}`)
    });

    // Continue with the modified request
    return next.handle(modifiedRequest);
  }
}
