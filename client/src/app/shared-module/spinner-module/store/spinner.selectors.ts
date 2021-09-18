import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.models';
import { SpinnerState, spinnerFeatureKey } from './spinner.models';

export class SpinnerSelectors {
  private static spinnerFeature = (state: AppState): SpinnerState => state[spinnerFeatureKey];

  public static global = createSelector(SpinnerSelectors.spinnerFeature, (state: SpinnerState): boolean => state.global);
}
