import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CopyrightComponent } from './copyright/copyright.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ApplicantTableComponent } from './applicant-table/applicant-table.component';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HrUsersComponent } from './hr-users/hr-users.component';


import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './shared/interceptor/my.interceptor';
import {RedirectInterceptor} from './shared/interceptor/redirect.interceptor';
import { ComfirmationComponent } from './comfirmation/comfirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {JwtInterceptor} from "./shared/interceptor/jwt.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationFormComponent,
    CopyrightComponent,

    ApplicantTableComponent,
    ProfilePageComponent,
    HrUsersComponent,
    ComfirmationComponent,
    LoginComponent,
    ForgotPasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    CollapseModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule

  ],
  providers: [// {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: RedirectInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],

  bootstrap: [AppComponent]
})
export class AppModule { }
