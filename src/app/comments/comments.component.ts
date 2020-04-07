import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApplicationComment} from "../shared/models/application";
import {AuthenticationService} from "../shared/services/authentication.service";


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentGroup: FormGroup;
  submitted = false;
  comments:ApplicationComment[] = [];


  constructor(private formBuilder: FormBuilder,
              private authenticationService:AuthenticationService) {
  }

  ngOnInit(): void {
    let com1:ApplicationComment = {'userId':'userId','userName':'Namae','dateCreated':new Date().toString(),
      'comment':'comment aly rey realy realy rely realy realy realyrealy realy reaaly realyrealy realy realy realy long'};
    this.comments.push(com1);
    this.comments.push(com1);
    this.comments.push(com1);
    this.comments.push(com1);
    this.comments.push(com1);
    this.comments.push(com1);

    this.commentGroup = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }

  get f() {
    return this.commentGroup.controls;
  }

  onSubmit() {
    this.submitted = true;

  }
}
