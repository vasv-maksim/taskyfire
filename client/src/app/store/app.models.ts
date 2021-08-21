import { kanban, KanbanState } from '../kanban-module/store/kanban.models';

export interface AppState {
  [kanban]: KanbanState;
}
