import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { KanbanComponent } from './kanban/kanban.component';
import { SharedModule } from '../shared-module/shared.module';
import { reducer } from './store/kanban.reducer';
import { kanbanFeatureKey } from './store/kanban.models';
import { KanbanEffects } from './store/kanban.effects';
import { KanbanDumpComponent } from './kanban-dump/kanban-dump.component';

@NgModule({
  declarations: [
    KanbanComponent,
    KanbanDumpComponent,
  ],
  imports: [
    SharedModule,
    EffectsModule.forFeature([KanbanEffects]),
    StoreModule.forFeature(kanbanFeatureKey, reducer),
  ],
  exports: [
    KanbanComponent,
  ],
})
export class KanbanModule { }
