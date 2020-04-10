import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrApplicationTableComponent } from './hr-application-table.component';

describe('ApplicantTableComponent', () => {
  let component: HrApplicationTableComponent;
  let fixture: ComponentFixture<HrApplicationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrApplicationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrApplicationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
