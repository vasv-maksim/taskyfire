import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.models';
import { KanbanState } from './kanban.reducer';

import { allCards, CardState } from './entities/card.entity';
import { allColumn, ColumnState } from './entities/column.entity';
import {
  cardsFeatureKey, columnsFeatureKey, kanbanFeatureKey,
} from './kanban.models';

export class KanbanSelectors {
  private static kanbanFeature = (state: AppState): KanbanState => state[kanbanFeatureKey];

  private static cardFeature = createSelector(KanbanSelectors.kanbanFeature, (state: KanbanState): CardState => state[cardsFeatureKey]);

  public static cards = createSelector(KanbanSelectors.cardFeature, allCards);

  private static columnFeature = createSelector(KanbanSelectors.kanbanFeature, (state: KanbanState): ColumnState => state[columnsFeatureKey]);

  public static columns = createSelector(KanbanSelectors.columnFeature, allColumn);
}
