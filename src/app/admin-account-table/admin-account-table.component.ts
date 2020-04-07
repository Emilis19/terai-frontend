import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-hr-users',
  templateUrl: './admin-account-table.component.html',
  styleUrls: ['./admin-account-table.component.scss']
})
export class AdminAccountTableComponent implements OnInit {

  public users=[ ];
  constructor(private userService: AccountService) { }

  ngOnInit(): void {
    this. userService. getUsers()
    .subscribe(data =>this.users=data);
  }

}
