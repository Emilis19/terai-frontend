import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBigTextBoxComponent } from './home-page-big-text-box.component';

describe('HomePageBigTextBoxComponent', () => {
  let component: HomePageBigTextBoxComponent;
  let fixture: ComponentFixture<HomePageBigTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageBigTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageBigTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
