import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../shared/services/application.service';

@Component({
  selector: 'app-applicant-table',
  templateUrl: './applicant-table.component.html',
  styleUrls: ['./applicant-table.component.scss']
})
export class ApplicantTableComponent implements OnInit {

  public applicants=[ ];
  constructor(private applicantService: ApplicationService) { }

  ngOnInit(): void {
   this.applicantService.getApplicants()
   .subscribe(data =>this.applicants=data);
  }

}
