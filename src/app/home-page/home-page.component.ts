
import { Component, OnInit } from '@angular/core';
import {Copyright} from '../copyright';
import {copyrigthList} from './listOfItems'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  copyrightList: Copyright[];

  constructor() { }

  ngOnInit(): void {
    console.log("asd");
    this.copyrightList = copyrigthList;
  }

  


}
