import { Component, OnInit } from '@angular/core';
import { Copyright } from '../copyright';
import { copyrigthList } from '../registration-form/listOfItems';

@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.scss']
})
export class ComfirmationComponent implements OnInit {
  copyrightList: Copyright[];

  constructor() { }

  ngOnInit(): void {
    this.copyrightList = copyrigthList;
  }

}
