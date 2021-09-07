import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module/material.module';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';

@NgModule({
  exports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [
    InfoDialogComponent,
  ],
})
export class SharedModule { }
