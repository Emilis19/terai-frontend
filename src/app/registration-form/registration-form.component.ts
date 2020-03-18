import { Component, OnInit } from '@angular/core';
import { Application } from '../shared/request/application';
import { Copyright } from '../copyright';
import { copyrigthList } from './listOfItems';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  application: Application;

  copyrightList: Copyright[];
  constructor() { }

  ngOnInit() {
    this.copyrightList = copyrigthList;
  }

  createContact() {
    console.log(this.application);
  }
}
