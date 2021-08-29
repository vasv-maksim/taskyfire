import { TestBed } from '@angular/core/testing';

import { KanbanRepository } from './kanban.repository';

describe('KanbanRepositoryService', () => {
  let service: KanbanRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
