import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import { CardDialogComponent } from './components/card-dialog/card-dialog.component';
import { MaterialModule } from '../material-module/material.module';

@NgModule({
  declarations: [
    InfoDialogComponent,
    CardDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    InfoDialogComponent,
    CardDialogComponent,
  ],
})
export class DialogsModule { }
