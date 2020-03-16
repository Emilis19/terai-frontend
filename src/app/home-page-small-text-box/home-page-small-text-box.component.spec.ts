import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSmallTextBoxComponent } from './home-page-small-text-box.component';

describe('HomePageSmallTextBoxComponent', () => {
  let component: HomePageSmallTextBoxComponent;
  let fixture: ComponentFixture<HomePageSmallTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageSmallTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageSmallTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
