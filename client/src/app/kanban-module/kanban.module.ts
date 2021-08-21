import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { KanbanComponent } from './kanban/kanban.component';
import { SharedModule } from '../shared-module/shared.module';
import { reducer } from './store/kanban.reducer';
import { kanban } from './store/kanban.models';

@NgModule({
  declarations: [
    KanbanComponent,
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(kanban, reducer),
  ],
  exports: [
    KanbanComponent,
  ],
})
export class KanbanModule { }
