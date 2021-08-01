import { NgModule } from '@angular/core';

import { KanbanComponent } from './kanban/kanban.component';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [
    KanbanComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    KanbanComponent,
  ],
})
export class KanbanModule { }
