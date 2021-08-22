import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.models';

import { Column, Card, KanbanState } from './kanban.models';

export class KanbanSelectors {
  private static selectFeature = (state: AppState): KanbanState => state.kanban;

  public static columns = createSelector(KanbanSelectors.selectFeature, (state: KanbanState): Column[] => state.columns);

  public static cards = createSelector(KanbanSelectors.selectFeature, (state: KanbanState): Card[] => state.cards);
}
