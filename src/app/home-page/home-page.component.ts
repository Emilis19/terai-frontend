
import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {Copyright} from '../copyright';
import {copyrigthList} from './listOfItems';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewChecked {

  @ViewChild('nextElement', {static: false}) searchElement: ElementRef;

  copyrightList: Copyright[];


  constructor() { }

  showOne = false;
  showBlock = false;
  copyrightLimit = 1;

  ngOnInit() { this.copyrightList = copyrigthList; }


   scroll() {
    if(!this.showOne){
      this.showOne = true;
      this.showBlock = true;
      this.copyrightLimit = 2;
      this.searchElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.searchElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngAfterViewChecked() {
    if(this.showBlock){
      this.searchElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.showBlock = true;
    }
  }

}
