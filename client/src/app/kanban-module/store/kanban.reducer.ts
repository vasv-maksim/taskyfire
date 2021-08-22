import { createReducer, on, Action } from '@ngrx/store';

import { KanbanActions } from './kanban.action';
import { KanbanState } from './kanban.models';

export const initialState: KanbanState = {
  columns: [
    {
      id: '1',
      title: 'Backlog',
    },
    {
      id: '2',
      title: 'SelectedForDev',
    },
    {
      id: '3',
      title: 'InProgress',
    },
    {
      id: '4',
      title: 'Review',
    },
    {
      id: '5',
      title: 'Done',
    },
  ],
  cards: [
    {
      id: '1',
      name: 'Task №1',
      columnId: '1',
    },
    {
      id: '2',
      name: 'Task №2',
      columnId: '1',
    },
    {
      id: '3',
      name: 'Task №3',
      columnId: '1',
    },
    {
      id: '4',
      name: 'Task №4',
      columnId: '2',
    },
    {
      id: '5',
      name: 'Task №5',
      columnId: '2',
    },
    {
      id: '6',
      name: 'Task №6',
      columnId: '3',
    },
  ],
};

const kanbanReducer = createReducer(
  initialState,
  on(KanbanActions.test, (state: KanbanState): KanbanState => ({ ...state })),
);

export function reducer(state: KanbanState, action: Action) {
  return kanbanReducer(state, action);
}
