import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthenticationService} from "../shared/services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  errorDisplayable = '';
  showSpinner = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
    if (this.authenticationService.currentUserValue) {
      //authenticationService.logout();
      this.router.navigate(['/'+this.authenticationService.currentUserValue.role]);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.showSpinner = true;
    this.submitted = true;
    this.error = '';
    this.errorDisplayable = '';
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.showSpinner = false;
      return;
    }


    this.loading = true;
    this.authenticationService.login(this.loginForm.controls.userEmail.value, this.loginForm.controls.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.showSpinner = false;
          this.router.navigate(['/'+this.authenticationService.currentUserValue.role]);
        },
        error => {
          this.error = error;
          this.errorDisplayable = "Neteisingi prisijungimo duomenys";
          this.loading = false;
          this.showSpinner = false;
        });
  }
}

