import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, Subject, pipe  } from 'rxjs';
import {map, takeUntil, tap} from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const httpsReq = req.clone({
      url: req.url.replace("http://", "https://")
    });
    
    return next.handle(httpsReq);
  }
}