import { Component, OnInit } from '@angular/core';
import {from, Observable } from 'rxjs';
import { Application } from '../shared/request/application';
import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from '../table-service/applicant.service';
import { switchMap, tap } from "rxjs/operators";
import{FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  serverErrorMessage: string;
  public applicantion$: Observable<Application>;
  public applicationContent : string[];

  constructor(
    private route: ActivatedRoute,
    private applicantService: ApplicantService,
    private fb: FormBuilder
  ) { }

  applicationForm = this.fb.group({
    status: ['', [  ]],
    comment: ['', [  ]]})

  ngOnInit(){
    this.applicantion$ = from(this.route.paramMap).pipe(
      switchMap(params => {
        return this.applicantService.getApplication({ id: params.get("id") });
      }),
      tap(applicantion => {
        this.applicationContent = applicantion.email.split("\n");
      })
    );

    // onSubmit() {
    //   this.application = this.applicationForm.value;
    // this.registrationService.addRegistration(this.application).subscribe(() => {
    //   this.application = new Application('', '', '', '', '','','','','','','','','','', '');
    //  this.serverErrorMessage = '';
    //  },
    //  error => this.serverErrorMessage = error
  
    // );

    onSubmit() {
      this.applicantion$ = this.applicationForm.value;
      this.applicantService. updateApplication({ id: params.get("id") },this.application))
      .subscribe(data =>this.applicant=data);

  }

}
