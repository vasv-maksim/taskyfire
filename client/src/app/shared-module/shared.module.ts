import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module/material.module';
import { SpinnerModule } from './spinner-module/spinner.module';
import { GraphQLModule } from './graphql-module/graphql.module';
import { DialogsModule } from './dialogs-module/dialogs.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,
    SpinnerModule,
    GraphQLModule,
    DialogsModule,
  ],
})
export class SharedModule { }
