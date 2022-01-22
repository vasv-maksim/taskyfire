/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { DialogsService } from 'src/app/shared-module/dialogs-module/service/dialogs.service';
import { initialState as state } from '../../store/columns.entity';

import { ColumnsComponent } from './columns.component';

describe('ColumnsComponent', () => {
  let component: ColumnsComponent;
  let fixture: ComponentFixture<ColumnsComponent>;
  let store: MockStore;
  let dialogsService: DialogsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnsComponent],
      imports: [MatDialogModule],
      providers: [
        provideMockStore({ initialState: state }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsComponent);
    store = TestBed.inject(MockStore);
    dialogsService = TestBed.inject(DialogsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
