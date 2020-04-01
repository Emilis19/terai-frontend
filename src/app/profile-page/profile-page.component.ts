import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {ApplicationFullResponse, ApplicationRequest, ApplicationStatusRequest} from '../shared/models/application';
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from '../shared/services/application.service';
import {switchMap, tap} from "rxjs/operators";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  serverErrorMessage: string;
  public application: ApplicationFullResponse;
  private statusRequest: ApplicationStatusRequest;
  public applicationContent: string[];
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private applicantService: ApplicationService,
    private fb: FormBuilder
  ) {
  }

  applicationForm = this.fb.group({
    status: ['', []],
    comment: ['', []]
  });

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.applicantService.getApplication(this.id).subscribe(data =>this.application=data);
  }
  //get f() { return this.applicationForm.controls; }


  // onSubmit() {
  //   this.application = this.applicationForm.value;
  // this.registrationService.addRegistration(this.application).subscribe(() => {
  //   this.application = new Application('', '', '', '', '','','','','','','','','','', '');
  //  this.serverErrorMessage = '';
  //  },
  //  error => this.serverErrorMessage = error

  // );

  onSubmit() {
    //this.statusRequest = { id: this.id, status: this.applicationForm.value};
    //console.log(this.applicationForm.value);
    //this.applicantService.updateStatus(this.statusRequest)
  }
}
