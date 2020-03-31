import { Injectable } from '@angular/core';
import { Application } from '../shared/request/application';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  apiUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  //getRegistrationForm(): Observable<Application[]> {
  //  return this.http.get<Application[]>(`/application`).pipe(
  //    catchError(this.errorHandler)
 //   );
 // }

  getRegistrationForm(): Observable<Application[]> {
   return this.http.get<Application[]>(`${this.apiUrl}/application`).pipe(
 //  catchError(this.errorHandler)
   )
   ;
  }

 // addRegistration(application: Application): Observable<Application> {
//    return this.http.post<Application>(`/application`, application, this.httpOptions).pipe(
 //     catchError(this.errorHandler)
 //   );
 // }

 addRegistration(application: Application): Observable<Application> {
   return this.http.post<Application>(`${this.apiUrl}/application`, application, this.httpOptions).pipe(
 //   catchError(this.errorHandler)
  );
 }

 // updateRegistation(id: String, application: Application): Observable<Application> {
 //   return this.http.put<Application>(`/application/${id}`, application, this.httpOptions).pipe(
 //     catchError(this.errorHandler)
//    );
//  }

  updateRegistation(id: String, application: Application): Observable<Application> {
   return this.http.put<Application>(`${this.apiUrl}/application/${id}`, application, this.httpOptions).pipe(
    // catchError(this.errorHandler)
    );
  }

//  delete(id: String): Observable<{}> {
  //  return this.http.delete(`/application/${id}`, this.httpOptions).pipe(
 //     catchError(this.errorHandler)
 //   );
//  }

  delete(id: String): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/application/${id}`, this.httpOptions).pipe(
   //   catchError(this.errorHandler)
    );
 }


// errorHandler(error) {
 //  let errorMessage = '';
 //  if (error.error instanceof ErrorEvent) {
 //   errorMessage = 'Error: ${error.error.massage}';
 // }
//else {
 // errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
//}
//return throwError (errorMessage);
// }


}


