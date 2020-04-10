import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApplicationRequest, DraftRequest} from '../shared/models/application';
import {Copyright} from '../copyright';
import {copyrigthList} from './listOfItems';
import {RegistrationService} from '../shared/services/registration.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ApplicationService} from '../shared/services/application.service';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  providers: [RegistrationService]
})


export class RegistrationFormComponent implements OnInit, OnDestroy {

  application: ApplicationRequest;
  copyrightList: Copyright[];
  serverErrorMessage = '';
  title = "Registracija į 2021m. IT Akademiją";
  id: string;
  additional = false;
  answer = false;
  submitted = false;
  applicationForm: FormGroup;
  anyStuff = false;
  editStuff = false;

  constructor(
    private registrationService: RegistrationService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private applicantService: ApplicationService,
    private router: Router) {
  }

  ngOnInit() {
    this.copyrightList = copyrigthList;
    this.route.paramMap.subscribe(parameterMap => {
      this.id = parameterMap.get('id');
    });
    this.applicationForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.maxLength(32),
        Validators.pattern('[a-zA-ZĀ-ſ]*')
      ]],
      lastName: ['', [
        Validators.required,
        Validators.maxLength(32),
        Validators.pattern('[a-zA-ZĀ-ſ]*')
      ]],
      email: ['', [
        Validators.required,
        Validators.maxLength(32),
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]],
      academyTime: ['',
        [Validators.required
        ]],
      academyTimeReason: [" ", []],
      contractAgreement: ['',
        [Validators.required
        ]],
      contractReason: [" ", []],
      likedTechnologies: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(300),
      ]],
      reasonForApplying: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(300),
      ]],
      school: ['',],
      degree: ['',],
      mobileNumber: ['', []],
      image: ['', []],
      hobbies: ['', []],
      referenceToIt: ['', []],
      linkedinUrl: ['', [
        Validators.pattern("https?://.+"),
      ]],
      projectUrl: ['', [
        Validators.pattern("https?://.+"),
      ]],
    });
    this.getApplicant(this.id);
    this.changeButtton(this.id);
    this.changeButton2(this.id);
  }

  get f() {
    return this.applicationForm.controls;
  }

  onchange2(args) {
    this.additional = true;
    return this.additional;
  }

  onchange3(args) {
    this.additional = false;
    return this.additional;
  }

  onchange(args) {
    this.answer = true;
    return this.answer;
  }

  onchange1(args) {
    this.answer = false;
    return this.answer;
  }

  changeButtton(id : string) {
if (id === '0') {
  this.anyStuff = true;
}
  }

changeButton2(id : string) {
  if (id !== '0') {
    this.editStuff = true;
  }
}


  private getApplicant(id: string) {
    if (id === '0') {
    } else {
      this.title = "REDAGAVIMAS";
      this.applicantService.getApplication(id).subscribe(data => this.application = data, error => this.serverErrorMessage = error);
    }
  }

 // validateAllFormFields(formGroup: FormGroup) {         
 // Object.keys(formGroup.controls).forEach(field => {  
 //   const control = formGroup.get(field);            
 //   if (control instanceof FormControl) {             
  //    control.markAsTouched({ onlySelf: true });
  //  } else if (control instanceof FormGroup) {        
  //    this.validateAllFormFields(control);            
  //  }
 // });
//}

  onSubmit() {
    this.submitted = true;
      if (this.applicationForm.valid) {
        this.application = this.applicationForm.value;
        if (this.id === '0') {
          this.registrationService.addRegistration(this.application).subscribe(() => {
              this.router.navigate(['/confirmation']);
              // this.application = null;
            },
            error => this.serverErrorMessage = error
          );
        } else {
          this.registrationService.updateRegistation(this.id, this.application).subscribe(() => {
  
              this.router.navigate(['/application']);
              //    this.application = null;
              this.serverErrorMessage = '';
            },
            error => this.serverErrorMessage = error
          );
        }
      } else {
    //    this.validateAllFormFields(this.applicationForm);
        return;
      }
    }
   
   // this.application = this.applicationForm.value;
   //   if (this.id === '0') {
    //    this.registrationService.addRegistration(this.application).subscribe(() => {
    //        this.router.navigate(['/confirmation']);
   //         // this.application = null;
    //      },
   //       error => this.serverErrorMessage = error
  //      );
   //   } else {
   //     this.registrationService.updateRegistation(this.id, this.application).subscribe(() => {

   //         this.router.navigate(['/application']);
    //        //    this.application = null;
    //        this.serverErrorMessage = '';
    //      },
    //      error => this.serverErrorMessage = error
    //    );
    //  }
  //}

  ngOnDestroy(): void {
    if (this.applicationForm.controls.email.value && this.applicationForm.controls.email.valid) {
      let request: DraftRequest = {
        email: this.applicationForm.controls.email.value,
        firstName: this.applicationForm.controls.firstName.value
      };
      if (this.route.snapshot.paramMap.get("id") === '0')
        this.registrationService.addDraft(request).subscribe();
    }
  }
}
