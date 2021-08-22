import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { KanbanComponent } from './kanban/kanban.component';
import { SharedModule } from '../shared-module/shared.module';
import { reducer } from './store/kanban.reducer';
import { kanbanFeatureKey } from './store/kanban.models';

@NgModule({
  declarations: [
    KanbanComponent,
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(kanbanFeatureKey, reducer),
  ],
  exports: [
    KanbanComponent,
  ],
})
export class KanbanModule { }
