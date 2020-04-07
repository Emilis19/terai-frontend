import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../shared/services/application.service';

@Component({
  selector: 'app-applicant-table',
  templateUrl: './hr-application-table.component.html',
  styleUrls: ['./hr-application-table.component.scss']
})
export class HrApplicationTableComponent implements OnInit {

  public applicants=[ ];
  constructor(private applicantService: ApplicationService) { }

  ngOnInit(): void {
   this.applicantService.getApplicants()
   .subscribe(data =>this.applicants=data);
  }

}
