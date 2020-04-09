
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApplicationFullResponse, ApplicationRequest, DraftRequest} from '../shared/models/application';
import { Copyright } from '../copyright';
import { copyrigthList } from './listOfItems';
import { RegistrationService } from '../shared/services/registration.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '../shared/services/application.service';
import { ReactiveFormsModule } from '@angular/forms';

  // ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  providers: [RegistrationService]
})


export class RegistrationFormComponent implements OnInit, OnDestroy {

  application: ApplicationRequest;
  copyrightList: Copyright[];
  serverErrorMessage: string;
  numericNumberReg = '[\+[0-9]{0,11}]+';
  confirmationMessage = '';
  title = "Registracija į 2021m. IT Akademiją";
  id: string;


  applicationForm = this.fb.group({
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

    school: ['',
    ],

    degree: ['',
    ],

    mobileNumber: ['', [
      //Validators.pattern(this.numericNumberReg),
      //  Validators.pattern('[\+[0-9]{0,11}]+'),
      // Validators.pattern('[0-9]{1,8}')
    ]],

    image: ['', [

    ]  ],

    hobbies: ['', []],

    referenceToIt: ['', []],

    linkedinUrl: ['', [
      Validators.pattern("https?://.+"),
      // this.urlDomainValidator
    ]],
  });

  constructor(
    private registrationService: RegistrationService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private applicantService: ApplicationService,
    private router: Router) { }


  additional = false;
  answer = false;
  // onload(args){
  //   if(!this.application.academyTime)
  //     {this.additional=true;
  //       return this.additional;
  //     }
  //     if(!this.application.contractAgreement)
  //     {this.answer=true;
  //       return this.answer;
  //     }
  // }


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

  ngOnInit() {
    this.copyrightList = copyrigthList;
    this.route.paramMap.subscribe(parameterMap => {
      this.id = parameterMap.get('id');
    }); 
    this.getApplicant(this.id);
  }

  private getApplicant(id: string) {
    if (id === '0') {
      this.application = {
        firstName: null,
        lastName: null,
        email: null,
        academyTime: null,
        academyTimeReason: null,
        contractAgreement: null,
        contractReason: null,
        likedTechnologies: null,
        reasonForApplying: null,
        school: null,
        degree: null,
        mobileNumber: null,
        linkedinUrl: null,
        hobbies: null,
        referenceToIt: null
      };
      // this.applicationForm.reset();
    } else {
      this.title = "Redagavimas";
      this.applicantService.getApplication(id).subscribe(data => this.application = data);
    }
  }

  urlDomainValidator(control: FormControl) {
    let url = control.value;
    if (url != -1) {
      let domain = url.slice(0, 20);
      if (domain != "linkedin") {
        return {
          urlDomain: {
            parsedDomain: domain
          }
        }
      }
      return null;
    }
  }


  onSubmit() {
    this.application = this.applicationForm.value;
      if(this.id === '0'){
        this.registrationService.addRegistration(this.application).subscribe(() => {
          this.router.navigate(['/confirmation']);
         // this.application = null;
         this.serverErrorMessage = '';
         }, 
         error => this.serverErrorMessage = error
        );
      }
      else {
        this.registrationService.updateRegistation(this.id, this.application).subscribe(() => {

          this.router.navigate(['/application']);
     //    this.application = null;
         this.serverErrorMessage = '';
         },
         error => this.serverErrorMessage = error
        );
      }
  }

  refreshPage() {
    window.location.reload();
  }
  ngOnDestroy(): void {
    console.log("destroyed");
    if(this.applicationForm.controls.email.value && this.applicationForm.controls.email.valid) {
      let request:DraftRequest ={email:this.applicationForm.controls.email.value,firstName:this.applicationForm.controls.firstName.value};
      if(this.route.snapshot.paramMap.get("id") === '0')
        console.log("sent");
      this.registrationService.addDraft(request).subscribe();
    }
  }
  get firstName() { return this.applicationForm.get('firstName'); }
  get lastName() { return this.applicationForm.get('lastName');}
  get academyTime() {return this.applicationForm.get('academyTime'); }
  get academyTimeReason() {return this.applicationForm.get('academyTimeReason'); }
  get email() {return this.applicationForm.get('email'); }
  get contractAgreement() {return this.applicationForm.get('contractAgreement'); }
  get contractReason() {return this.applicationForm.get('contractReason'); }
  get likedTechnologies() {return this.applicationForm.get('likedTechnologies'); }
  get reasonForApplying() {return this.applicationForm.get('reasonForApplying'); }
  get school() {return this.applicationForm.get('school'); }
  get degree() {return this.applicationForm.get('degree'); }
  get mobileNumber() {return this.applicationForm.get('mobileNumber'); }
  get hobbies() {return this.applicationForm.get('hobbies'); }
  get referenceToIt() {return this.applicationForm.get('referenceToIt'); }
  get linkedinUrl() {return this.applicationForm.get('linkedinUrl'); }
  get image() {return this.applicationForm.get('image'); }
}
