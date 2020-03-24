import { TestBed } from '@angular/core/testing';

import { RegistrationformsendService } from './registration.service';

describe('RegistrationformsendService', () => {
  let service: RegistrationformsendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationformsendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
