import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Account, AccountRequest} from '../models/account';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {ApplicationRequest} from "../models/application";

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     // 'Authorization-bearer': localStorage.getItem('TOKEN')
    })};
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${environment.apiUrl}/accounts`).pipe();
  }
  createUser(accountRequest:AccountRequest): Observable<AccountRequest> {
    return this.httpClient.post<AccountRequest>(`${environment.apiUrl}/accounts`, accountRequest, this.httpOptions).pipe();
  }
}
