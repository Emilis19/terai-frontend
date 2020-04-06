import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ApplicantTableComponent } from './applicant-table/applicant-table.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HrUsersComponent } from './hr-users/hr-users.component';
import { ComfirmationComponent } from './comfirmation/comfirmation.component';
import {ApplicationReviewComponent} from './application-review/application-review.component';
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {CreateAccountComponent} from "./create-account/create-account.component";



const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  { path: 'registration', component: RegistrationFormComponent},
  {path: 'hr', component:  ApplicantTableComponent},
  {path: 'applicant/:id', component: ProfilePageComponent},
  {path: 'admin', component: HrUsersComponent},
  {path: 'confirmation', component: ComfirmationComponent},

  {path:'application', component: ApplicationReviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
