import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material-module/material.module';
import { spinnerFeatureKey } from './store/spinner.models';
import { reducer } from './store/spinner.reducer';
import { GlobalSpinnerComponent } from './components/global-spinner/global-spinner.component';

@NgModule({
  declarations: [
    GlobalSpinnerComponent,
  ],
  imports: [
    MaterialModule,
    StoreModule.forFeature(spinnerFeatureKey, reducer),
  ],
  exports: [
    GlobalSpinnerComponent,
  ],
})
export class SpinnerModule { }
