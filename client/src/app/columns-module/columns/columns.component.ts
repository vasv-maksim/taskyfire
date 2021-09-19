import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/app.models';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';
import { ColumnsActions } from '../store/columns.action';
import { ColumnsSelectors } from '../store/columns.selectors';

@Component({
  selector: 'tkr-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss'],
})
export class ColumnsComponent implements OnInit {
  public readonly columns: Observable<QGetColumns_columns[]> = this.store.select(ColumnsSelectors.columns);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.loadColumns();
  }

  private loadColumns(): void {
    this.store.dispatch(ColumnsActions.loadColumns());
  }

  public dropCard(): void {
    // this.store.dispatch(ColumnsActions.dropCard);
  }
}
