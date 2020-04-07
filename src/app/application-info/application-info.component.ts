
import {Component, OnInit, Input} from '@angular/core';
import {from, Observable} from 'rxjs';
import {ApplicationFullResponse, ApplicationRequest, ApplicationStatusRequest} from '../shared/models/application';
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from '../shared/services/application.service';
import {switchMap, tap} from "rxjs/operators";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-view-applicant-profile',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.scss']
})
export class ApplicationInfoComponent implements OnInit {
  @Input() viewApplicantProfileContent: ApplicationFullResponse;



  serverErrorMessage: string;
  //public application: ApplicationFullResponse;
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


  selectedOption: string;
  printedOption: string;

  options = [
    { name: "IT akademija gavo formą", value: 1 },
    { name: "Registracijos forma yra peržiūrima", value: 2 },
    { name: "Priėmimas į akademiją patvirtintas", value: 3 },
    { name: "Neigiamas atsakymas dėl priėmimo į akademiją", value: 4 }
  ]


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
//    this.applicantService.getApplication(this.id).subscribe(data =>this.application=data);
  }


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

