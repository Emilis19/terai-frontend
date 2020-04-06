import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptor, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class RedirectInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
    ) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse && event.status === 200 && this.router.url == '/application') {
                        this.router.navigate(['/home'])}}),
                        //this.toastr.success("Object created."),
               retry(1),
               catchError((error: HttpErrorResponse) => {
                   let errorMessage = '';
                       if (error.status === 400 ) {
                    errorMessage = `Klaida ! ${error.error.message}`;
                } 
                else {
                     
                       errorMessage = " Klaida - bandykite vėliau";
                    }
                   console.log(errorMessage);
                   return throwError(errorMessage);
                })






              

            )
    }
}

