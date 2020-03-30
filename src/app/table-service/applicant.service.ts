import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Applicant } from '../applicant';
import { Observable } from 'rxjs';
import { Application } from '../shared/request/application';


@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private Appurl= 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     // 'Authorization-bearer': localStorage.getItem('TOKEN')
    })
  }
  constructor(private httpClient: HttpClient) { }

  getApplicants(): Observable<Applicant[]> {
    return this.httpClient.get<Applicant[]>(`${this.Appurl}/application`).pipe();
  }

  getApplication({ id }):Observable<Application>{
    return this.httpClient.get<Application>(`${this.Appurl}/application/${id}`);
  }
}
