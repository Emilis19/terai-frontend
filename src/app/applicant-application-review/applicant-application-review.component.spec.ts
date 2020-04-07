import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantApplicationReviewComponent } from './applicant-application-review.component';

describe('ApplicationReviewComponent', () => {
  let component: ApplicantApplicationReviewComponent;
  let fixture: ComponentFixture<ApplicantApplicationReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantApplicationReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantApplicationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
