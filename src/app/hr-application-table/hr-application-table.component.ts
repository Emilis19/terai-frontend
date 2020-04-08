import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../shared/services/application.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { ApplicationHRResponse } from '../shared/models/application';


const ELEMENT_DATA: ApplicationHRResponse[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-applicant-table',
  templateUrl: './hr-application-table.component.html',
  styleUrls: ['./hr-application-table.component.scss']
})
export class HrApplicationTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'data', 'status', 'link'];
  dataSource = new MatTableDataSource( this.applicants);

  public dataSource ;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  

  public applicants=[ ];
  constructor(private applicantService: ApplicationService) { }

  ngOnInit(): void {
   this.applicantService.getApplicants()
   .subscribe(data =>this.applicants=data);

   this.applicantService.getApplicants()
   .subscribe(data =>this.dataSource=data);

   this.dataSource.sort = this.sort;
  }

}
