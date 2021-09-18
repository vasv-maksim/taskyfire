import { kanbanFeatureKey } from '../kanban-module/store/kanban.models';
import { KanbanState } from '../kanban-module/store/kanban.reducer';

import { spinnerFeatureKey, SpinnerState } from '../shared-module/spinner-module/store/spinner.models';

export interface AppState {
  [kanbanFeatureKey]: KanbanState;
  [spinnerFeatureKey]: SpinnerState;
}
