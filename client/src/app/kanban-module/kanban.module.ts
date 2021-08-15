import { NgModule } from '@angular/core';

import { KanbanComponent } from './kanban/kanban.component';
import { SharedModule } from '../shared-module/shared.module';
import { ColumnComponent } from './kanban/column/column.component';

@NgModule({
  declarations: [
    KanbanComponent,
    ColumnComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    KanbanComponent,
  ],
})
export class KanbanModule { }
