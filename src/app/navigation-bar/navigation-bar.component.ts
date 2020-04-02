import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  constructor(private router: Router,
              public authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }


}
