import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../shared/services/application.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { ApplicationHRResponse } from '../shared/models/application';


@Component({
  selector: 'app-applicant-table',
  templateUrl: './hr-application-table.component.html',
  styleUrls: ['./hr-application-table.component.scss']
})
export class HrApplicationTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'data', 'status', 'link'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public applicants: ApplicationHRResponse[];
  public dataSource;
  constructor(private applicantService: ApplicationService) { }

  ngOnInit(): void {
    this.applicantService.getApplicants()
    .subscribe(data => {
      this.applicants = data;
      this.dataSource = new MatTableDataSource(this.applicants);
      this.dataSource.sort = this.sort;
    });
  }




}
