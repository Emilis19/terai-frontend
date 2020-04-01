import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment} from '../../../environments/environment';
import {LoggedInUser} from "../models/loggedInUser";
import {ApplicationRequest} from "../models/application";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<LoggedInUser>;
    public currentUser: Observable<LoggedInUser>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<LoggedInUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): LoggedInUser {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth/signin`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }
    forgotPassword(email: string) {
      return this.http.post<ApplicationRequest>(`${environment.apiUrl}/credentials/forgot`, {email}).pipe(
        //   catchError(this.errorHandler)
      );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
