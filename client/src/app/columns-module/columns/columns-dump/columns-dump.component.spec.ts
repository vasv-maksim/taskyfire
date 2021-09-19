import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsDumpComponent } from './columns-dump.component';

describe('ColumnDumpComponent', () => {
  let component: ColumnsDumpComponent;
  let fixture: ComponentFixture<ColumnsDumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnsDumpComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsDumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
