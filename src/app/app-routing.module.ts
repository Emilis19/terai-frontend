import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

import { ApplicantTableComponent } from './applicant-table/applicant-table.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HrUsersComponent } from './hr-users/hr-users.component';


import { TestComponent } from './test/test.component';
import { ComfirmationComponent } from './comfirmation/comfirmation.component';
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";



const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  { path: 'registration', component: RegistrationFormComponent},

  {path: '/hr-dashboard', component:  ApplicantTableComponent},
  {path: 'applicant/:id', component: ProfilePageComponent},
  {path: 'admin-dashboard', component: HrUsersComponent},


  {path: 'confirmation', component: ComfirmationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'test', component: TestComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
