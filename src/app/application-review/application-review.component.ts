import {Component, OnInit} from '@angular/core';
import {ApplicationFullResponse} from '../shared/models/application';
import {ActivatedRoute} from '@angular/router';
import {ApplicationService} from "../shared/services/application.service";
import {AuthenticationService} from "../shared/services/authentication.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-application-review',
  templateUrl: './application-review.component.html',
  styleUrls: ['./application-review.component.scss']

})
export class ApplicationReviewComponent implements OnInit {
  public applicationReviewContent: ApplicationFullResponse;
  show = false;

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.applicationService.getApplication(this.authenticationService.currentUserValue.id).subscribe(data => this.applicationReviewContent = data);
  }
}
