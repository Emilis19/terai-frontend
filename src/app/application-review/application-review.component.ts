import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import {ApplicationFullResponse, ApplicationRequest, ApplicationStatusRequest} from '../shared/models/application';
import {LoggedInUser} from "../shared/models/loggedInUser";
import {ActivatedRoute} from '@angular/router';
import {ReviewApplicationService} from '../shared/services/review-application.service'


@Component({
  selector: 'app-application-review',
  templateUrl: './application-review.component.html',
  styleUrls: ['./application-review.component.scss']
})
export class ApplicationReviewComponent implements OnInit {

  serverErrorMessage: string;
  public applicationReviewContent: ApplicationFullResponse;
  private statusRequest: ApplicationStatusRequest;
  private id: string;
  private status = '';
  show = false;

  constructor(
    private route: ActivatedRoute,
    private applicationReviewService: ReviewApplicationService,
  ) { 
  }

  ngOnInit(): void {
    this.applicationReviewService.getApplication().subscribe(data =>this.applicationReviewContent=data);
    this.status = this.applicationReviewContent.status;
    console.log(this.status);
  }

  onload=this.applicationReviewService.getApplication().subscribe(data =>this.applicationReviewContent=data);

  get status1(): string { return this.applicationReviewContent.status; }
}
