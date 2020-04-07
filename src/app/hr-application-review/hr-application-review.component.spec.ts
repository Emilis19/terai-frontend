import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrApplicationReviewComponent } from './hr-application-review.component';

describe('ProfilePageComponent', () => {
  let component: HrApplicationReviewComponent;
  let fixture: ComponentFixture<HrApplicationReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrApplicationReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrApplicationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
