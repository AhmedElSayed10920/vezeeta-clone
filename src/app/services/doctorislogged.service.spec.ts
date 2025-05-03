import { TestBed } from '@angular/core/testing';

import { DoctorisloggedService } from './doctorislogged.service';

describe('DoctorisloggedService', () => {
  let service: DoctorisloggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorisloggedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
