import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.models';

import { selectAll, ColumnsState } from './columns.entity';
import { columnsFeatureKey } from './columns.models';

export class ColumnsSelectors {
  private static columnsFeature = (state: AppState): ColumnsState => state[columnsFeatureKey];

  public static columns = createSelector(ColumnsSelectors.columnsFeature, selectAll);

  public static isLoading = createSelector(ColumnsSelectors.columnsFeature, (state: ColumnsState): boolean => state.isLoading);

  public static isError = createSelector(ColumnsSelectors.columnsFeature, (state: ColumnsState): boolean => state.isError);
}
