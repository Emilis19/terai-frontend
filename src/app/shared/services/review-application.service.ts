import { Injectable } from '@angular/core';
import {ApplicationFullResponse, ApplicationRequest} from '../models/application';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {LoggedInUser} from "../models/loggedInUser";



@Injectable({
  providedIn: 'root'
})
export class ReviewApplicationService {
  private currentUserSubject: BehaviorSubject<LoggedInUser>;
  public currentUser: Observable<LoggedInUser>;
  id : String;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<LoggedInUser>(JSON.parse(localStorage.getItem('currentUser')));
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  
  public get idValue(): string {
    return this.currentUserSubject.value.id;
}


  getApplication():Observable<ApplicationFullResponse>{
    return this.http.get<ApplicationFullResponse>(`${environment.apiUrl}/applications/${this.idValue}`);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
