import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HrApplicationTableComponent } from './hr-application-table/hr-application-table.component';
import { HrApplicationReviewComponent } from './hr-application-review/hr-application-review.component';
import { AdminAccountTableComponent } from './admin-account-table/admin-account-table.component';
import { ComfirmationComponent } from './comfirmation/comfirmation.component';
import {ApplicantApplicationReviewComponent} from './applicant-application-review/applicant-application-review.component';
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {CreateAccountComponent} from "./create-account/create-account.component";



const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  { path: 'registration/:id', component: RegistrationFormComponent},
  {path: 'hr', component:  HrApplicationTableComponent},
  {path: 'applicant/:id', component: HrApplicationReviewComponent},
  {path: 'admin', component: AdminAccountTableComponent},
  {path: 'confirmation', component: ComfirmationComponent},

  {path:'application', component: ApplicantApplicationReviewComponent},
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
