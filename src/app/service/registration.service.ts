import { Injectable } from '@angular/core';
import { Application } from '../shared/request/application';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  apiUrl = 'https://terai-backend-staging.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  
  getRegistrationForm(): Observable<Application[]> {
   return this.http.get<Application[]>(`${this.apiUrl}/application`).pipe(
   )
   ;
  }

 addRegistration(application: Application): Observable<Application> {
   return this.http.post<Application>(`${this.apiUrl}/application`, application, this.httpOptions).pipe(
  );
 }


  updateRegistation(id: String, application: Application): Observable<Application> {
   return this.http.put<Application>(`${this.apiUrl}/application/${id}`, application, this.httpOptions).pipe(
    );
  }


  delete(id: String): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/application/${id}`, this.httpOptions).pipe(
    );
 }

}


