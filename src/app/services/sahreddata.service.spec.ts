import { TestBed } from '@angular/core/testing';

import { SahreddataService } from './sahreddata.service';

describe('SahreddataService', () => {
  let service: SahreddataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SahreddataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
