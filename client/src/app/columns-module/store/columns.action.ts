import { createAction, props } from '@ngrx/store';
import { Drop } from 'generated/globalTypes';
import { QGetCard_card } from 'src/codegen/generated/QGetCard';
import { QGetCards_cards } from 'src/codegen/generated/QGetCards';
import { QGetColumn_column } from 'src/codegen/generated/QGetColumn';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';

export class ColumnsActions {
  public static loadCards = createAction('[Columns] loadCards');

  public static loadCardsSucc = createAction('[Columns] loadCards Succ', props<{ cards: QGetCards_cards[] }>());

  public static loadCardById = createAction('[Columns] loadCardById', props<{ id: Uuid }>());

  public static loadCardByIdSucc = createAction('[Columns] loadCardById Succ', props<{ card: QGetCard_card }>());

  public static loadColumns = createAction('[Columns] loadColumns');

  public static loadColumnsErr = createAction('[Columns] loadColumns Err');

  public static loadColumnsSucc = createAction('[Columns] loadColumns Succ', props<{ columns: QGetColumns_columns[] } >());

  public static loadColumnById = createAction('[Columns] loadColumnById', props<{ id: Uuid }>());

  public static loadColumnByIdSucc = createAction('[Columns] loadColumnByIdSucc', props<{ column: QGetColumn_column }>());

  public static dropCard = createAction('[Columns] dropCard', props<{ drop: Drop }>());

  public static dropCardSucc = createAction('[Columns] dropCard Succ');

  public static dropCardErr = createAction('[Columns] dropCard Err');
}
