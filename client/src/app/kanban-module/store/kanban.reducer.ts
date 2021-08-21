import { createReducer, on, Action } from '@ngrx/store';

import { KanbanActions } from './kanban.action';
import { KanbanState } from './kanban.models';

export const initialState: KanbanState = {
  columns: [
    {
      id: '1',
      title: 'Backlog',
      tasks: [{
        name: 'Task №1',
      },
      {
        name: 'Task №2',
      },
      {
        name: 'Task №3',
      },
      {
        name: 'Task №4',
      }],
    },
    {
      id: '2',
      title: 'SelectedForDev',
      tasks: [],
    },
    {
      id: '3',
      title: 'InProgress',
      tasks: [
        {
          name: 'Task №5',
        },
        {
          name: 'Task №6',
        },
      ],
    },
    {
      id: '4',
      title: 'Review',
      tasks: [],
    },
    {
      id: '5',
      title: 'Done',
      tasks: [
        {
          name: 'Task №7',
        },
      ],
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
