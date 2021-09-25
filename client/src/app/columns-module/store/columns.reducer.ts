import { createReducer, on, Action } from '@ngrx/store';

import { ColumnsActions } from './columns.action';
import { initialState, adapter, ColumnsState } from './columns.entity';

// const clamp = (value: number, max: number): number => Math.max(0, Math.min(max, value));

// const moveCardInColumn(cards: any, fromIndex: number, toIndex: number): any[]  => {
//   const from = clamp(fromIndex, cards.length - 1);
//   const to = clamp(toIndex, cards.length - 1);

//   if (from === to) {
//     return cards;
//   };

//   const target = cards[from];
//   const delta = to < from ? -1 : 1;

//   for (let i = from; i !== to; i += delta) {
//     cards[i] = cards[i + delta];
//   }

//   cards[to] = target;
//   return cards;
// }

const columnReducer = createReducer(
  initialState,
  on(ColumnsActions.dropCard, (state) => ({ ...state })),

  on(ColumnsActions.loadColumns, (state) => ({ ...state, isLoading: true, isError: false })),
  on(ColumnsActions.loadColumnsSucc, (state, { columns }) => adapter.addMany(columns, {
    ...state, isLoading: false, isError: false,
  })),
  on(ColumnsActions.loadColumnsErr, (state) => ({ ...state, isLoading: false, isError: true })),

  on(ColumnsActions.loadColumnByIdSucc, (state, { column }) => adapter.addOne(column, state)),

  // on(ColumnsActions.moveCardInColumn, (state: ColumnsState, { cards, previousCardIndex, currentCardIndex }) => {
  //   console.log('', cards, previousCardIndex, currentCardIndex);
  //   return adapter.updateOne(cards, state);
  // }),

);

export function reducer(state: ColumnsState, action: Action) {
  return columnReducer(state, action);
}
