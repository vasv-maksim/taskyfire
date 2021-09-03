import { createAction, props } from '@ngrx/store';
import { QGetCard_card } from 'src/codegen/generated/QGetCard';
import { QGetCards_cards } from 'src/codegen/generated/QGetCards';
import { QGetColumn_column } from 'src/codegen/generated/QGetColumn';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';

import { Drop } from './kanban.models';

export class KanbanActions {
  public static dropCard = createAction('[Kanban] dropCard', props<{ drop: Drop}>());

  public static loadCards = createAction('[Kanban] loadCards');

  public static loadCardsSucc = createAction('[Kanban] loadCards Succ', props<{ cards: QGetCards_cards[]}>());

  public static loadCardById = createAction('[Kanban] loadCardById', props<{ id: Uuid}>());

  public static loadCardByIdSucc = createAction('[Kanban] loadCardById Succ', props<{ card: QGetCard_card}>());

  public static loadColumns = createAction('[Kanban] loadColumns');

  public static loadColumnsSucc = createAction('[Kanban] loadColumns Succ', props<{ columns: QGetColumns_columns[]}>());

  public static loadColumnById = createAction('[Kanban] loadColumnById', props<{ id: Uuid}>());

  public static loadColumnByIdSucc = createAction('[Kanban] loadColumnByIdSucc', props<{ column: QGetColumn_column}>());
}
