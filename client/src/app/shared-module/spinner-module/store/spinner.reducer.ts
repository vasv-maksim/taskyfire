import { createReducer, on, Action } from '@ngrx/store';

import { SpinnerActions } from './spinner.action';
import { SpinnerState } from './spinner.models';

export const initialState: SpinnerState = {
  global: false,
};

const spinnerReducer = createReducer(
  initialState,
  on(SpinnerActions.globalStart, (state: SpinnerState): SpinnerState => ({ ...state, global: true })),
  on(SpinnerActions.globalStop, (state: SpinnerState): SpinnerState => ({ ...state, global: false })),
);

export function reducer(state: SpinnerState, action: Action) {
  return spinnerReducer(state, action);
}
