import { Injectable } from '@angular/core';
import {ApplicationStatusRequest} from '../models/application';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {LoggedInUser} from "../models/loggedInUser";

@Injectable({
    providedIn: 'root'
  })
  export class StatusService {
  
  
  //  httpOptions = {
  //    headers: new HttpHeaders({
  //      'Content-Type': 'application/json',
  //    })
 //   };
  //  constructor(private http: HttpClient) { }
  
 //   getStatusData(id : string):Observable<ApplicationStatusRequest>{
 //     return this.http.get<ApplicationStatusRequest>(`${environment.apiUrl}/applications/${id}`);
 //   }

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


 getStatus():Observable<ApplicationStatusRequest>{
   return this.http.get<ApplicationStatusRequest>(`${environment.apiUrl}/applications/${this.idValue}`);
 }


  
  
  }
  
