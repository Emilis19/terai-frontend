import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CopyrightComponent } from './copyright/copyright.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HrApplicationTableComponent } from './hr-application-table/hr-application-table.component';

import { HrApplicationReviewComponent } from './hr-application-review/hr-application-review.component';
import { AdminAccountTableComponent } from './admin-account-table/admin-account-table.component';


import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './shared/interceptors/my.interceptor';
import {RedirectInterceptor} from './shared/interceptors/redirect.interceptor';
import { ComfirmationComponent } from './comfirmation/comfirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ApplicantApplicationReviewComponent } from './applicant-application-review/applicant-application-review.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {JwtInterceptor} from "./shared/interceptors/jwt.interceptor";
import { ApplicationInfoComponent } from './application-info/application-info.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { StatusComponent } from './status/status.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CommentsComponent } from './comments/comments.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BlankPageComponent } from './blank-page/blank-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationFormComponent,
    CopyrightComponent,
    ComfirmationComponent,
    ApplicantApplicationReviewComponent,

    HrApplicationTableComponent,
    HrApplicationReviewComponent,
    AdminAccountTableComponent,
    ComfirmationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ApplicationInfoComponent,
    NavigationBarComponent,
    CommentsComponent,
    StatusComponent,
    CreateAccountComponent,
    BlankPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule


  ],
  providers: [//{provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: RedirectInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }




