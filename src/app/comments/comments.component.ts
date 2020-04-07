import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApplicationComment, CommentRequest} from "../shared/models/application";
import {AuthenticationService} from "../shared/services/authentication.service";
import {ApplicationService} from "../shared/services/application.service";
import {first} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentGroup: FormGroup;
  submitted = false;
  commentRequest: CommentRequest;
  HRid: string;
  error = '';
  appId: string;
  comments$:Observable<ApplicationComment[]>;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private applicationService: ApplicationService) {
  }

  ngOnInit(): void {
    this.appId = this.route.snapshot.paramMap.get("id");
    this.comments$ = this.applicationService.getComments(this.appId);
    this.comments$.subscribe();
    this.HRid = this.authenticationService.currentUserValue.id;
    this.commentGroup = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }

  get f() {
    return this.commentGroup.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.commentGroup.invalid) {
      return;
    }
    this.commentRequest = {hrId: this.HRid, appId: this.appId, comment: this.commentGroup.controls.comment.value};
    this.applicationService.addComment(this.commentRequest).pipe(first())
      .subscribe();
  }
}
