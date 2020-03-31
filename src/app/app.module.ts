import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './shared/interceptor/my.interceptor';
import {RedirectInterceptor} from './shared/interceptor/redirect.interceptor';
import { ComfirmationComponent } from './comfirmation/comfirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegistrationFormComponent,
    CopyrightComponent,
    TestComponent,
    ComfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [// {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: RedirectInterceptor, multi: true}],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
