import { TestBed } from '@angular/core/testing';

import { ColumnsRepository } from './columns.repository';

describe('ColumnsRepositoryService', () => {
  let service: ColumnsRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnsRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
