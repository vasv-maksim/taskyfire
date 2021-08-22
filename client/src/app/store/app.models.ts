import { kanbanFeatureKey } from '../kanban-module/store/kanban.models';
import { KanbanState } from '../kanban-module/store/kanban.reducer';

export interface AppState {
  [kanbanFeatureKey]: KanbanState;
}
