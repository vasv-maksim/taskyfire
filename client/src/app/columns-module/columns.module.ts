import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ColumnsComponent } from './columns/columns.component';
import { SharedModule } from '../shared-module/shared.module';
import { reducer } from './store/columns.reducer';
import { ColumnsEffects } from './store/columns.effects';
import { ColumnsDumpComponent } from './columns/columns-dump/columns-dump.component';
import { columnsFeatureKey } from './store/columns.models';

@NgModule({
  declarations: [
    ColumnsComponent,
    ColumnsDumpComponent,
  ],
  imports: [
    SharedModule,
    EffectsModule.forFeature([ColumnsEffects]),
    StoreModule.forFeature(columnsFeatureKey, reducer),
  ],
  exports: [
    ColumnsComponent,
  ],
})
export class ColumnsModule { }
