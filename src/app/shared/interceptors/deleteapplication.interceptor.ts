import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class DeleteApplicationInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
    
  ): Observable<HttpEvent<any>> {
    
    return next.handle(request)
      .pipe(
       // tap((event: HttpEvent<any>) => {
        //  if (event instanceof HttpResponse && event.status === 200 && this.router.url == 'application/') {
        //    console.log("test");
       //     this.router.navigate(['/blankpage'])
       //   }
       // }),
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.status === 400) {
            errorMessage = `Klaida ! ${error.error.message}`;
          } else if (error.status === 403 && !(this.router.url == '/login'||this.router.url == '/forgot-password')) {
            this.authenticationService.logout();
            this.router.navigate(['/login']);
          } else {
            errorMessage = " Klaida - bandykite vėliau";
          }
          console.log(errorMessage);
          return throwError(errorMessage);
        })
      )
  }
}
