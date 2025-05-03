import { TestBed } from '@angular/core/testing';

import { DoctorverificationService } from './doctorverification.service';

describe('DoctorverificationService', () => {
  let service: DoctorverificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorverificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
