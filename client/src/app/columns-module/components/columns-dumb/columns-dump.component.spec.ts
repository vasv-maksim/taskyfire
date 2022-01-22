import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsDumbComponent } from './columns-dumb.component';

describe('ColumnDumpComponent', () => {
  let component: ColumnsDumbComponent;
  let fixture: ComponentFixture<ColumnsDumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnsDumbComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
