import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../store/app.models';
import { SpinnerSelectors } from '../store/spinner.selectors';

@Component({
  selector: 'tkr-global-spinner',
  templateUrl: './global-spinner.component.html',
  styleUrls: ['./global-spinner.component.scss'],
})
export class GlobalSpinnerComponent {
  public readonly spinner$: Observable<boolean> = this.store.select(SpinnerSelectors.global);

  constructor(private store: Store<AppState>) { }
}
