import { Component, OnInit } from '@angular/core';
import {from, Observable } from 'rxjs';
import { Application } from '../shared/request/application';
import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from '../table-service/applicant.service';
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  public applicantion$: Observable<Application>;
  public applicationContent : string[];

  constructor(
    private route: ActivatedRoute,
    private applicantService: ApplicantService
  ) { }

  ngOnInit(){
    this.applicantion$ = from(this.route.paramMap).pipe(
      switchMap(params => {
        return this.applicantService.getApplication({ id: params.get("id") });
      }),
      tap(applicantion => {
        this.applicationContent = applicantion.email.split("\n");
      })
    );
  }

}
