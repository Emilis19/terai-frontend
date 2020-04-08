import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  ApplicationFullResponse,
  ApplicationHRResponse,
  ApplicationRequest,
  ApplicationStatusRequest
} from '../models/application';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization-bearer': localStorage.getItem('TOKEN')
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  getApplicants(): Observable<ApplicationHRResponse[]> {
    return this.httpClient.get<ApplicationHRResponse[]>(`${environment.apiUrl}/applications`).pipe();
  }

  getApplication(id: string): Observable<ApplicationFullResponse> {
    return this.httpClient.get<ApplicationFullResponse>(`${environment.apiUrl}/applications/${id}`);
  }

//   updateApplication(id: String, application: Application): Observable<Application> {
//     return this.httpClient.put<Application>(`${this.Appurl}/application/${id}`, application, this.httpOptions).pipe(
//      );

// }

  updateStatus(applicationStatusRequest: ApplicationStatusRequest): Observable<ApplicationStatusRequest> {
    return this.httpClient.put<ApplicationStatusRequest>(`${environment.apiUrl}/applications/changestatus`, applicationStatusRequest, this.httpOptions).pipe(
    );

    // getApplication(id : string): Observable<Application> {
    //   return this.httpClient.get<Application>(`${this.Appurl}/applications/${id}`);
    // }

  }

  delete(id: String): Observable<ApplicationFullResponse> {
       return this.httpClient.delete<ApplicationFullResponse>(`${environment.apiUrl}/applications/${id}`, this.httpOptions).pipe(
       );
   }




}
