import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { QGetCards_cards } from 'src/codegen/generated/QGetCards';

export const selectId = (card: QGetCards_cards): Uuid => card.id;

export const sortComparer = (a: QGetCards_cards, b: QGetCards_cards): number => a.name.localeCompare(b.name);

export const cardAdapter: EntityAdapter<QGetCards_cards> = createEntityAdapter<QGetCards_cards>({
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

export interface CardState extends EntityState<QGetCards_cards> {}

export const cardInitialState = cardAdapter.getInitialState({});
