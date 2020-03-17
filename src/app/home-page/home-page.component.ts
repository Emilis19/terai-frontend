
import { Component, OnInit } from '@angular/core';
import {Copyright} from '../copyright';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("asd");
  }

  copyRight: Copyright = {
    year: 2018, author : "Shridhar Gupta", activeLink: "https://unsplash.com/photos/dZxQn4VEv2M", platform : "Unsplash"
  };


}
