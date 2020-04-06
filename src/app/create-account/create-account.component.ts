import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AccountService} from "../shared/services/account.service";
import {AccountRequest} from "../shared/models/account";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  accountGroup: FormGroup;
  loading = false;
  submitted = false;
  accountRequest:AccountRequest;
  error = '';
  errorDisplayable = '';
  showSpinner = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountGroup = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', Validators.required],
      name: ['',Validators.required],
      lastName: ['',Validators.required],
      adminCheck:[]
    });
  }
  get f() { return this.accountGroup.controls; }

  onSubmit() {
    this.showSpinner = true;
    this.submitted = true;
    this.error = '';
    this.errorDisplayable = '';
    // stop here if form is invalid
    if (this.accountGroup.invalid) {
      this.showSpinner = false;
      return;
    }
    let name = this.accountGroup.controls.name.value.toString();
    let lastName = this.accountGroup.controls.lastName.value.toString();
    let email = this.accountGroup.controls.userEmail.value.toString();
    let password = this.accountGroup.controls.password.value.toString();
    let roles : string[];
    if(this.accountGroup.controls.adminCheck.value){
      roles = ["ROLE_ADMIN","ROLE_USER"];
    }else{
      roles = ["ROLE_USER"];
    }

    this.accountRequest={name,lastName,email,password,roles};
    this.loading = true;
    this.accountService.createUser(this.accountRequest)
      .pipe(first())
      .subscribe(
        data => {
          this.showSpinner = false;
          this.router.navigate(['/admin']);
        },
        error => {
          this.error = error;
          this.loading = false;
          this.showSpinner = false;
        });
  }
}
