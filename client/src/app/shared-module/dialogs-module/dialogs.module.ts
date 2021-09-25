import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    InfoDialogComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InfoDialogComponent,
  ],
})
export class DialogsModule { }
