import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {ApplicationFullResponse} from '../shared/models/application';
import {Status} from '../shared/models/status';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit, OnChanges {
  content: string;
  divClass: string;
  imageSrc: string;
  statusEnum = Status;
  answer = 0;
  @Input()
  applicationReviewContent: ApplicationFullResponse;


  constructor() {
  }
  ngOnInit(){

  }
  ngOnChanges() {
    switch (this.applicationReviewContent.status) {
      case this.statusEnum.Gavo:
        this.divClass = "col-sm-12 alert purple pt-4 pb-4 pl-5 pr-5";
        this.imageSrc = "assets/img/tick-inside-circle.svg";
        this.answer = 1;
        break;
      case this.statusEnum.Priimtas:
        this.divClass = "col-sm-12 alert green pt-4 pb-4 pl-5 pr-5";
        this.imageSrc = "assets/img/tick-inside-circle.svg";
        this.answer = 2;
        break;
      case this.statusEnum.Nepriime:
        this.divClass = "col-sm-12 alert redN pt-4 pb-4 pl-5 pr-5";
        this.imageSrc = "assets/img/cancel.svg";
        this.answer = 3;
        break;
      case this.statusEnum.Nebaigta:
        this.divClass = "col-sm-12 alert white pt-4 pb-4 pl-5 pr-5";
        this.imageSrc = "assets/img/incomplete-hand-drawn-symbol.svg";
        this.answer = 4;
        break;
      case this.statusEnum.Vykdoma:
        this.divClass = "col-sm-12 alert orangle pt-4 pb-4 pl-5 pr-5";
        this.imageSrc = "assets/img/hourglass.svg";
        this.answer = 5;
        break;
    }
  }
}
