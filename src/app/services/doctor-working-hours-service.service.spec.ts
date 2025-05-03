import { TestBed } from '@angular/core/testing';

import { DoctorWorkingHoursServiceService } from './doctor-working-hours-service.service';

describe('DoctorWorkingHoursServiceService', () => {
  let service: DoctorWorkingHoursServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorWorkingHoursServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
