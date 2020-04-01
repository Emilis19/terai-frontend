import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptor, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class RedirectInterceptor implements HttpInterceptor {
    constructor(
        private router: Router
    ) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse && event.status === 200 && this.router.url == '/registration') {
                        this.router.navigate(['/confirmation'])}}),
                     //   this.toastr.success("Object created."),
               // retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        if (error.statusText === "BAD_REQUEST" || error.status === 404 || error.status===401 || error.status===402 || error.status==403)
                       errorMessage = `Error: ${error.message}`;
                        //errorMessage = "Jau yra toks el pastas";
                    } else {
                        // server-side error
                        errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                       // errorMessage = "Jau yra toks el pastas";
                    }
                    console.log(errorMessage);
                    return throwError(errorMessage);
                }),

            )
    }
}







