import { createAction, props } from '@ngrx/store';
import { Card, Drop, Column } from './kanban.models';

export class KanbanActions {
  public static dropCard = createAction('[Kanban] dropCard', props<{ drop: Drop}>());

  public static loadCards = createAction('[Kanban] loadCards');

  public static loadCardsSucc = createAction('[Kanban] loadCards Succ', props<{ cards: Card[]}>());

  public static loadColumns = createAction('[Kanban] loadColumns');

  public static loadColumnsSucc = createAction('[Kanban] loadColumns Succ', props<{ columns: Column[]}>());
}
