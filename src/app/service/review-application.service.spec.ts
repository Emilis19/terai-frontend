import { TestBed } from '@angular/core/testing';

import { ReviewApplicationService } from './review-application.service';

describe('ReviewApplicationService', () => {
  let service: ReviewApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
