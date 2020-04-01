import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-hr-users',
  templateUrl: './hr-users.component.html',
  styleUrls: ['./hr-users.component.scss']
})
export class HrUsersComponent implements OnInit {

  public users=[ ];
  constructor(private userService: AccountService) { }

  ngOnInit(): void {
    this. userService. getUsers()
    .subscribe(data =>this.users=data);
  }

}
