import { columnsFeatureKey } from '../columns-module/store/columns.models';
import { ColumnsState } from '../columns-module/store/columns.entity';

import { spinnerFeatureKey, SpinnerState } from '../shared-module/spinner-module/store/spinner.models';

export interface AppState {
  [columnsFeatureKey]: ColumnsState;
  [spinnerFeatureKey]: SpinnerState;
}
