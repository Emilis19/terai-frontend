import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { MatSort } from '@angular/material/sort';
import {Account } from '../shared/models/account';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hr-users',
  templateUrl: './admin-account-table.component.html',
  styleUrls: ['./admin-account-table.component.scss']
})
export class AdminAccountTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'lastLoggedIn', 'reviewedApplications'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  public users: Account[ ];
  public dataSource;
  constructor(private userService: AccountService) { }

  ngOnInit(): void {
    this. userService. getUsers()
    .subscribe(data =>{
      this.users=data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
    });
  }

}
