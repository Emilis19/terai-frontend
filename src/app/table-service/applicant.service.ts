import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Applicant } from '../applicant';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private Appurl= 'http://localhost:8080/application';
  constructor(private http: HttpClient) { }

  getApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(this.Appurl);
  }
}
