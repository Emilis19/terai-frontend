import { Injectable } from '@angular/core';
import {ApplicationFullResponse, ApplicationRequest} from '../models/application';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ReviewApplicationService {

  id : String;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }



  getApplication({ id }):Observable<ApplicationFullResponse>{
    return this.http.get<ApplicationFullResponse>(`${environment.apiUrl}/applications/${id}`);
  }




}
