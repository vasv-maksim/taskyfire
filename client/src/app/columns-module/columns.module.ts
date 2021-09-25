import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ColumnsComponent } from './components/columns/columns.component';
import { SharedModule } from '../shared-module/shared.module';
import { reducer } from './store/columns.reducer';
import { ColumnsEffects } from './store/columns.effects';
import { ColumnsDumbComponent } from './components/columns-dumb/columns-dumb.component';
import { columnsFeatureKey } from './store/columns.models';

@NgModule({
  declarations: [
    ColumnsComponent,
    ColumnsDumbComponent,
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
