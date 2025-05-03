import { TestBed } from '@angular/core/testing';

import { NewDoctorServiceService } from './new-doctor-service.service';

describe('NewDoctorServiceService', () => {
  let service: NewDoctorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewDoctorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
