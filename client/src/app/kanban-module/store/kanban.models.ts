import { QGetCards_cards } from 'src/codegen/generated/QGetCards';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';

export interface Drop {
  cardId: Uuid;
  columnId: Uuid;
}

export interface Group extends QGetColumns_columns {
  cards: QGetCards_cards[]
}

export const kanbanFeatureKey = 'kanban';
export const columnsFeatureKey = 'columns';
export const cardsFeatureKey = 'cards';
