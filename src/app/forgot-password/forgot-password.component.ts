import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthenticationService} from "../service/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  errorDisplayable = '';
  successMessage = '';
  showSpinner = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/'+this.authenticationService.currentUserValue.role]);
    }
  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      userEmail: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.forgotPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    this.errorDisplayable = '';
    this.successMessage = '';
    this.showSpinner = true;


    if (this.forgotPasswordForm.invalid) {
      this.showSpinner = false;
      return;
    }
    this.authenticationService.forgotPassword(this.forgotPasswordForm.controls.userEmail.value)
      .pipe(first())
      .subscribe(
        data => {
          this.successMessage="Naujas slaptažodis išsiųstas";
          this.showSpinner = false;
        },
        error => {
          this.showSpinner = false;
          this.error = error;
          this.errorDisplayable = "Toks vartotojas neegzistuoja";
          this.loading = false;
        });
  }
}

