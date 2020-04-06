import { Component, OnInit, Input } from '@angular/core';
import {from, Observable} from 'rxjs';
import {ApplicationFullResponse, ApplicationRequest, ApplicationStatusRequest} from '../shared/models/application';
import {LoggedInUser} from "../shared/models/loggedInUser";
import {ActivatedRoute} from '@angular/router';
import {StatusService} from '../shared/services/status.service'
import { ɵangular_packages_animations_browser_browser_a } from '@angular/animations/browser';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import {ApplicationReviewComponent} from '../application-review/application-review.component'
import {Status} from '../shared/models/status';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  content : string;

  serverErrorMessage: string;
  statusEnum = Status;
  answer = false;
  answer1 = false;
  answer2 = false;
  answer3 = false;
  answer4 = false;
  status = '';
  @Input() applicationReviewContent: ApplicationFullResponse; 


  constructor(
    private route: ActivatedRoute,
    private StatusService: StatusService,
  ) {  
  }

  ngOnInit(): void {
   // this.id = '';
   // this.StatusService.getStatusData(this.id).subscribe(data =>this.statusContent=data);
   //this.StatusService.getStatus().subscribe(data => this.statusContent=data);
   //this.status= this.statusContent.status;
  // console.log(this.statusContent);
  // this.onshow1;
  this.status = JSON.stringify(this.applicationReviewContent.status);
  }

 onload = this.onshow1();


onshow1() {
  if (this.status.indexOf('gavo')){  //=== '"IT akademija gavo formą"') {
    this.answer = true;
    return this.answer;
 }
  else if (this.status.indexOf('patvirtintas')) { // === '"Priėmimas į akademiją patvirtintas"') {
    this.answer1 = true;
    return this.answer1;
  }
  else if (this.status.indexOf('atsakymas')) {   // === '"Neigiamas atsakymas dėl priemimo į akademiją"')  {
    this.answer2 = true;
    return this.answer2;
  }
  else if (this.status.indexOf('nebaigta')) { // === '"Registracijos forma nebaigta pildyti"') {
    this.answer3 = true;
  return this.answer3;
  }
  else if (this.status.indexOf('peržiūrima')) {
   this.answer4 = true;
   return this.answer4;
 }

}

}
