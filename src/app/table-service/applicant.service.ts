import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Applicant } from '../applicant';
import { Observable } from 'rxjs';
import { Application } from '../shared/request/application';
import { User } from '../user';


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
    return this.httpClient.get<Applicant[]>(`${this.Appurl}/applications`).pipe();
  }

  getApplication(id : string): Observable<Application> {
    return this.httpClient.get<Application>(`${this.Appurl}/applications/${id}`);
  }

//   updateApplication(id: String, application: Application): Observable<Application> {
//     return this.httpClient.put<Application>(`${this.Appurl}/application/${id}`, application, this.httpOptions).pipe(
//      );

// }

updateApplication(application: Application): Observable<Application> {
  return this.httpClient.put<Application>(`${this.Appurl}/application/${application.id}`, application, this.httpOptions).pipe(
  );

    // getApplication(id : string): Observable<Application> {
    //   return this.httpClient.get<Application>(`${this.Appurl}/applications/${id}`);
    // }



}
}