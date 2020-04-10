import { Injectable } from '@angular/core';
import {ApplicationRequest, DraftRequest} from '../models/application';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }


  // getRegistrationForm(): Observable<ApplicationRequest[]> {
  //  return this.http.get<ApplicationRequest[]>(`${environment.apiUrl}/applications`).pipe(
  //  );
  // }

 addRegistration(application: ApplicationRequest): Observable<ApplicationRequest> {

   return this.http.post<ApplicationRequest>(`${environment.apiUrl}/applications`, application, this.httpOptions).pipe(
  );
 }


   updateRegistation(id: String, application: ApplicationRequest): Observable<ApplicationRequest> {
    return this.http.put<ApplicationRequest>(`${environment.apiUrl}/applications/${id}`, application, this.httpOptions).pipe(
     );
   }
 //
 //
 //  delete(id: String): Observable<{}> {
 //    return this.http.delete(`${environment.apiUrl}/applications/${id}`, this.httpOptions).pipe(
 //    );
 // }

  addDraft(request: DraftRequest):Observable<DraftRequest> {
    return this.http.post<ApplicationRequest>(`${environment.apiUrl}/drafts`, request, this.httpOptions).pipe();
  }
}


