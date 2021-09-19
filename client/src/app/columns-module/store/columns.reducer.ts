import { createReducer, on, Action } from '@ngrx/store';

import { ColumnsActions } from './columns.action';
import { initialState, adapter, ColumnsState } from './columns.entity';

const columnReducer = createReducer(
  initialState,
  on(ColumnsActions.dropCard, (state: ColumnsState): ColumnsState => ({ ...state })),
  on(ColumnsActions.loadColumnsSucc, (state, { columns }) => adapter.addMany(columns, state)),
  on(ColumnsActions.loadColumnByIdSucc, (state, { column }) => adapter.addOne(column, state)),
);

export function reducer(state: ColumnsState, action: Action) {
  return columnReducer(state, action);
}
