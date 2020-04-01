import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../table-service/applicant.service';

@Component({
  selector: 'app-applicant-table',
  templateUrl: './applicant-table.component.html',
  styleUrls: ['./applicant-table.component.scss']
})
export class ApplicantTableComponent implements OnInit {

  public applicants=[ ];
  constructor(private applicantService: ApplicantService) { }

  ngOnInit(): void {
   this.applicantService.getApplicants()
   .subscribe(data =>this.applicants=data);
  }

}
