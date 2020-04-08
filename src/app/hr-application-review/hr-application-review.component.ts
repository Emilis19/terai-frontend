import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {ApplicationFullResponse, ApplicationRequest, ApplicationStatusRequest} from '../shared/models/application';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplicationService} from '../shared/services/application.service';
import {switchMap, tap} from "rxjs/operators";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-profile-page',
  templateUrl: './hr-application-review.component.html',
  styleUrls: ['./hr-application-review.component.scss']
})
export class HrApplicationReviewComponent implements OnInit {

 // viewApplicantProfileContent: ApplicationFullResponse;

  serverErrorMessage: string;
  public application: ApplicationFullResponse;
  private statusRequest: ApplicationStatusRequest;
  public applicationContent: string[];
  private id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private applicantService: ApplicationService,
    private fb: FormBuilder
  ) {
  }

  applicationForm = this.fb.group({
    status: ['', []],
    comment: ['', []]
  });


  public selectedOption = "Two";
  printedOption: string;

  options = [
    { name: "IT akademija gavo formą", value: 0 },
    { name: "Registracijos forma yra peržiūrima", value: 1 },
    { name: "Priėmimas į akademiją patvirtintas", value: 2 },
    { name: "Neigiamas atsakymas dėl priėmimo į akademiją", value: 3 }
  ]


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.applicantService.getApplication(this.id).subscribe(data =>this.application=data);
  }

  // editable(){
  //   if(this.application.status != "IT akademija gavo formą")
  //       return false;
  //   else
  //     return true;
  // }

  // editApplicant(){
  //   this.router.navigate(['/registration', this.application.id]);
  // }

  onSubmit() {
    this.statusRequest = { id: this.id, status: this.selectedOption};
   // console.log("Statusas atnaujinamas: "+ this.selectedOption);
       this.applicantService.updateStatus(this.statusRequest).subscribe(() => {
      this.serverErrorMessage = '';
      },
     error => this.serverErrorMessage = error
     );
  }

  // refreshPage() {
  //   window.location.reload();
  // }

  print() {
    this.printedOption = this.selectedOption;
    console.log("My input: ", this.selectedOption);
  }
}
