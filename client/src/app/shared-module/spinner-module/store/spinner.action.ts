import { createAction } from '@ngrx/store';

export class SpinnerActions {
  public static globalStart = createAction('[Spinner] global start');

  public static globalStop = createAction('[Spinner] global stop');
}
