import { Injectable } from '@angular/core';
import { Application } from '../shared/request/application';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewApplicationService {

  id : String;

  apiUrl = 'https://terai-backend-staging.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }



  getApplication({ id }):Observable<Application>{
    return this.http.get<Application>(`${this.apiUrl}/application/${id}`);
  }




}
