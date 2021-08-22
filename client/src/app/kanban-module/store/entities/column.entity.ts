import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

import { Column } from '../kanban.models';

export const selectId = (card: Column): Uuid => card.id;

export const sortComparer = (a: Column, b: Column): number => a.title.localeCompare(b.title);

export const columnAdapter: EntityAdapter<Column> = createEntityAdapter<Column>({
  selectId,
  sortComparer,
});

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = columnAdapter.getSelectors();

export const columnIds = selectIds;
export const columnEntities = selectEntities;
export const allColumn = selectAll;
export const columnTotal = selectTotal;

export interface ColumnState extends EntityState<Column> {}

// const data = {
//   columns: [
//     {
//       id: '1',
//       title: 'Backlog',
//     },
//     {
//       id: '2',
//       title: 'SelectedForDev',
//     },
//     {
//       id: '3',
//       title: 'InProgress',
//     },
//     {
//       id: '4',
//       title: 'Review',
//     },
//     {
//       id: '5',
//       title: 'Done',
//     },
//   ],
// };

export const columnInitialState = columnAdapter.getInitialState();
