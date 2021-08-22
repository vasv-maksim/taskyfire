export interface KanbanState {
  columns: Column[];
  cards: Card[];
}

export interface Column {
  id: Uuid;
  title: string;
}

export interface Card {
  id: Uuid;
  columnId: Uuid;
  name: string;
}

export const kanban = 'kanban';
