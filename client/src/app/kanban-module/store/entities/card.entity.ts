import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

import { Card } from '../kanban.models';

export const selectId = (card: Card): Uuid => card.id;

export const sortComparer = (a: Card, b: Card): number => a.name.localeCompare(b.name);

export const cardAdapter: EntityAdapter<Card> = createEntityAdapter<Card>({
  selectId,
  sortComparer,
});

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = cardAdapter.getSelectors();

export const cardsIds = selectIds;
export const cardsEntities = selectEntities;
export const allCards = selectAll;
export const cardsTotal = selectTotal;

export interface CardState extends EntityState<Card> {}

// const data = {
//   cards: [
//     {
//       id: '1',
//       name: 'Task №1',
//       columnId: '1',
//     },
//     {
//       id: '2',
//       name: 'Task №2',
//       columnId: '1',
//     },
//     {
//       id: '3',
//       name: 'Task №3',
//       columnId: '1',
//     },
//     {
//       id: '4',
//       name: 'Task №4',
//       columnId: '2',
//     },
//     {
//       id: '5',
//       name: 'Task №5',
//       columnId: '2',
//     },
//     {
//       id: '6',
//       name: 'Task №6',
//       columnId: '3',
//     },
//   ],
// };

export const cardInitialState = cardAdapter.getInitialState({});
