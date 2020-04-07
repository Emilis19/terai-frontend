import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountTableComponent } from './admin-account-table.component';

describe('HrUsersComponent', () => {
  let component: AdminAccountTableComponent;
  let fixture: ComponentFixture<AdminAccountTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAccountTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAccountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
