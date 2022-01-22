import { TestBed } from '@angular/core/testing';

import { MomentService } from './moment.service';

describe('MomentService', () => {
  let service: MomentService;

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(MomentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should format dayMonthYear', () => {
    const dateTime = new Date('2021-12-17T18:30:30');
    const testDateTime = service.dayMonthYear(dateTime);
    expect(testDateTime).toBe('17.12.2021');
  });

  it('should format dayWithTime', () => {
    const dateTime = new Date('2021-12-17T18:30:30');
    const testDateTime = service.dayWithTime(dateTime);
    expect(testDateTime).toBe('17.12.2021 18:30');
  });
});
