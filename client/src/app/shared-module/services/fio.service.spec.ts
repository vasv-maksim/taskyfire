import { TestBed } from '@angular/core/testing';

import { FioService } from './fio.service';

describe('FioService', () => {
  let service: FioService;

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(FioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should format fullFio', () => {
    const fio = service.fullFio('Иванов', 'Иван', 'Иванович');
    expect(fio).toBe('Иванов Иван Иванович');
  });

  it('should format shortFio', () => {
    const fio = service.shortFio('Иванов', 'Иван', 'Иванович');
    expect(fio).toBe('Иванов И.И.');
  });

  it('should format fullFamilyAndName', () => {
    const fio = service.fullFamilyAndName('Иванов', 'Иван');
    expect(fio).toBe('Иванов Иван');
  });

  it('should format shortFamilyAndName', () => {
    const fio = service.shortFamilyAndName('Иванов', 'Иван');
    expect(fio).toBe('Иванов И.');
  });
});
