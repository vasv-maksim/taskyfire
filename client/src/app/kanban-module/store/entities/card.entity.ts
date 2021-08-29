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

export const cardInitialState = cardAdapter.getInitialState({});
