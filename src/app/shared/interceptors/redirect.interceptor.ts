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
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class RedirectInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    public toasterService: ToastrService,
    private authenticationService: AuthenticationService
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
        }),
        //this.toastr.success("Object created."),
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.status === 400) {
            errorMessage = `Klaida! ${error.error.message}`;
          } 
          else if (error.status === 500) {
            errorMessage = "Atsiprašome, serverio klaida"
          }
          else if (error.status === 403 && !(this.router.url == '/login'||this.router.url == '/forgot-password')) {
            this.authenticationService.logout();
            this.router.navigate(['/login']);
          } else {
            errorMessage = "Klaida! bandyk veliau"
          }
          console.log(errorMessage);
          return throwError(errorMessage);
        })
      )
  }
}







