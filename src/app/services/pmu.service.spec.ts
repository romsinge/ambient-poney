import { TestBed } from '@angular/core/testing';

import { PmuService } from './pmu.service';

describe('PmuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PmuService = TestBed.get(PmuService);
    expect(service).toBeTruthy();
  });
});
