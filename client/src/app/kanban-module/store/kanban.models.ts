export interface KanbanState {
  columns: Column[];
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Task {
  name: string;
}

export const kanban = 'kanban';
