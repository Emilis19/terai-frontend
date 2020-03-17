import { Component, OnInit, Input } from '@angular/core';
import {Copyright} from '../copyright';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

    @Input() copyright: Copyright;
   
  
   


}
