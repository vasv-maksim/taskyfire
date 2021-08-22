export interface Column {
  id: Uuid;
  title: string;
}

export interface Card {
  id: Uuid;
  columnId: Uuid;
  name: string;
}

export interface Drop {
  cardId: Uuid;
  columnId: Uuid;
}

export const kanbanFeatureKey = 'kanban';
export const columnsFeatureKey = 'columns';
export const cardsFeatureKey = 'cards';
