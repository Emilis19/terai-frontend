import {Component, OnInit,  TemplateRef, OnChanges, ViewChild, ElementRef} from '@angular/core';
import {ApplicationFullResponse} from '../shared/models/application';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplicationService} from "../shared/services/application.service";
import {AuthenticationService} from "../shared/services/authentication.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {LoggedInUser} from "../shared/models/loggedInUser";
import {Status} from '../shared/models/status';



@Component({
  selector: 'app-application-review',
  templateUrl: './applicant-application-review.component.html',
  styleUrls: ['./applicant-application-review.component.scss']

})
export class ApplicantApplicationReviewComponent implements OnInit,OnChanges {
  public applicationReviewContent: ApplicationFullResponse;
  show = false;
  serverErrorMessage : string;
 modalRef: BsModalRef;
 message: string;
 private currentUserSubject: BehaviorSubject<LoggedInUser>;
  public currentUser: Observable<LoggedInUser>;
  id = '';
  statusEnum = Status;
  status : string;
 //taken = false;
 @ViewChild('alert', { static: true }) alert: ElementRef;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private router: Router,
    private applicationService: ApplicationService,
    private authenticationService: AuthenticationService,
    private modalService: BsModalService
  ) {this.currentUserSubject = new BehaviorSubject<LoggedInUser>(JSON.parse(localStorage.getItem('currentUser')));}

  ngOnInit(): void {
    this.applicationService.getApplication(this.authenticationService.currentUserValue.id).subscribe(data => this.applicationReviewContent = data);
    this.id = this.authenticationService.currentUserValue.id;
  }

  
  ngOnChanges(): void {
    this.applicationService.getApplication(this.authenticationService.currentUserValue.id).subscribe(data => this.applicationReviewContent = data); 
  }

//changeStatus() {
 // switch (this.applicationReviewContent.status) {
 //   case this.statusEnum.Gavo:
 //     this.taken = false;
 //     break;
  //  case this.statusEnum.Priimtas:
 //     this.taken = true;
 //     break;
 //   case this.statusEnum.Nepriime:
 //     this.taken = true;
 //     break;
 //   case this.statusEnum.Nebaigta:
 //     this.taken = false;
  //    break;
 //   case this.statusEnum.Vykdoma:
 //     this.taken = false;
  //    break;
//  }
//}

editable(){
  if(this.applicationReviewContent.status == "Priėmimas į akademiją patvirtintas" || this.applicationReviewContent.status == "Neigiamas atsakymas dėl priėmimo į akademiją"){
    return false;
  } else{
    return true;
  }

  editable(){
    if(this.applicationReviewContent.status != "IT akademija gavo formą"){
      return false;
    } else{
      return true;
    }
  }

  editApplicant(){
    this.router.navigate(['/registration', this.applicationReviewContent.id]);
  }
}

editApplicant(){
  this.router.navigate(['/registration', this.id]);
}

delete() {
    this.applicationService.delete(this.authenticationService.currentUserValue.id).subscribe(() => {
      this.router.navigate(['/blankpage'])
      this.authenticationService.logout();
      this.serverErrorMessage = '';
      },
     error => this.serverErrorMessage = error
     );
     
}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
}

confirm(): void {
  this.delete();
  this.modalRef.hide();
  
}

decline(): void {
  this.modalRef.hide();
}


closeAlert() {
  this.alert.nativeElement.classList.remove('show');
}





}
 

