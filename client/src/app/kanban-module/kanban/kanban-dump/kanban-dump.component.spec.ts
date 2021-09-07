import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanDumpComponent } from './kanban-dump.component';

describe('KanbanDumpComponent', () => {
  let component: KanbanDumpComponent;
  let fixture: ComponentFixture<KanbanDumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanDumpComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanDumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
