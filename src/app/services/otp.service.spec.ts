import { TestBed } from '@angular/core/testing';

import { OtpService } from './otp.service';

describe('OTPService', () => {
  let service: OtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
