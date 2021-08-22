import { createReducer, on, Action } from '@ngrx/store';

import { KanbanActions } from './kanban.action';
import { cardInitialState, CardState } from './entities/card.entity';
import { columnInitialState, ColumnState } from './entities/column.entity';
import { columnsFeatureKey, cardsFeatureKey } from './kanban.models';

export interface KanbanState {
  [columnsFeatureKey]: ColumnState;
  [cardsFeatureKey]: CardState;
}

export const initialState: KanbanState = {
  [columnsFeatureKey]: columnInitialState,
  [cardsFeatureKey]: cardInitialState,
};

const kanbanReducer = createReducer(
  initialState,
  on(KanbanActions.dropCard, (state: KanbanState): KanbanState => ({ ...state })),
);

export function reducer(state: KanbanState, action: Action) {
  return kanbanReducer(state, action);
}
