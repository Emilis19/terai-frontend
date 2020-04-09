import { Component, OnInit } from '@angular/core';
import { Copyright } from '../copyright';
import { copyrigthList } from '../registration-form/listOfItems';

@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
  copyrightList: Copyright[];

  constructor() { }

  ngOnInit(): void {
    this.copyrightList = copyrigthList;
  }

}
