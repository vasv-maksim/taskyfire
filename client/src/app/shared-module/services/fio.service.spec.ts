import { TestBed } from '@angular/core/testing';

import { FioService } from './fio.service';

describe('FioService', () => {
  let service: FioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
