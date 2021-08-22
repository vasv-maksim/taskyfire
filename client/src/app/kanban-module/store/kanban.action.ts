import { createAction, props } from '@ngrx/store';
import { Drop } from './kanban.models';

export class KanbanActions {
  public static dropCard = createAction('[Kanban] dropCard', props<{ drop: Drop}>());
}
