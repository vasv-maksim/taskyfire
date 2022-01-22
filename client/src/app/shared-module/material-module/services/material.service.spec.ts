import { TestBed } from '@angular/core/testing';

import { MaterialService } from './material.service';

describe('MaterialService', () => {
  let service: MaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(MaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('No data case - if call with param', () => {
    const testSearch = service.emptySearch('test');
    expect(testSearch).toBe('Нет данных, подходящих под условие поиска «test»');
  });

  it('Empty list  - if call with no param', () => {
    const testSearch = service.emptySearch();
    expect(testSearch).toBe('Список объектов пуст');
  });

  it('filterSubstring callback should return true', () => {
    const filterSubstringCallback = service.filterSubstring();
    const callResult = filterSubstringCallback({ name: 'Test string' }, 'est');
    expect(callResult).toBe(true);
  });

  it('filterSubstring callback should return false', () => {
    const filterSubstringCallback = service.filterSubstring();
    const callResult = filterSubstringCallback({ name: 'Test case' }, 'estblabla');
    expect(callResult).toBe(false);
  });

  it('filterFirstLetters callback should return true', () => {
    const filterFirstLettersCallback = service.filterFirstLetters();
    const callResult = filterFirstLettersCallback({ name: 'Test case' }, 'tes');
    expect(callResult).toBe(true);
  });

  it('filterFirstLetters callback should return false', () => {
    const filterFirstLettersCallback = service.filterFirstLetters();
    const callResult = filterFirstLettersCallback({ name: 'Test case' }, 'blates');
    expect(callResult).toBe(false);
  });
});
