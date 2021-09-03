import { createReducer, on, Action } from '@ngrx/store';

import { KanbanActions } from './kanban.action';
import { cardAdapter, cardInitialState, CardState } from './entities/card.entity';
import { columnAdapter, columnInitialState, ColumnState } from './entities/column.entity';
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
  on(KanbanActions.loadColumnsSucc, (state, { columns }) => ({
    ...state,
    columns: columnAdapter.addMany(columns, state.columns),
  })),
  on(KanbanActions.loadColumnByIdSucc, (state, { column }) => ({
    ...state,
    columns: columnAdapter.addOne(column, state.columns),
  })),
  on(KanbanActions.loadCardsSucc, (state, { cards }) => ({
    ...state,
    cards: cardAdapter.addMany(cards, state.cards),
  })),
  on(KanbanActions.loadCardByIdSucc, (state, { card }) => ({
    ...state,
    cards: cardAdapter.addOne(card, state.cards),
  })),
);

export function reducer(state: KanbanState, action: Action) {
  return kanbanReducer(state, action);
}
