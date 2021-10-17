import { createReducer, on, Action } from '@ngrx/store';

import { ColumnsActions } from './columns.action';
import { initialState, adapter, ColumnsState } from './columns.entity';

const columnReducer = createReducer(
  initialState,
  on(ColumnsActions.loadColumns, (state) => ({ ...state, isLoading: true, isError: false })),

  on(ColumnsActions.loadColumnsSucc, (state, { columns }) => adapter.addMany(columns, {
    ...state, isLoading: false, isError: false,
  })),

  on(ColumnsActions.loadColumnsErr, (state) => ({ ...state, isLoading: false, isError: true })),

  on(ColumnsActions.loadColumnByIdSucc, (state, { column }) => adapter.addOne(column, state)),

  on(ColumnsActions.dropCardSucc, (state) => state),

  on(ColumnsActions.dropCardErr, (state) => state),

  // on(ColumnsActions.moveCardInColumn, (state: ColumnsState, { cards, previousCardIndex, currentCardIndex }) => {
  //   console.log('', cards, previousCardIndex, currentCardIndex);
  //   return adapter.updateOne(cards, state);
  // }),

);

export function reducer(state: ColumnsState, action: Action) {
  return columnReducer(state, action);
}
