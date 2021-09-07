import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/store/app.models';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';
import { QGetCards_cards } from 'src/codegen/generated/QGetCards';
import { KanbanActions } from '../store/kanban.action';
import { KanbanSelectors } from '../store/kanban.selectors';

@Component({
  selector: 'tkr-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent implements OnInit {
  public readonly columns: Observable<QGetColumns_columns[]> = this.store.select(KanbanSelectors.columns);

  public readonly cards: Observable<QGetCards_cards[]> = this.store.select(KanbanSelectors.cards);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(KanbanActions.loadColumns());
    this.store.dispatch(KanbanActions.loadCards());
  }

  public dropCard(): void {
    // this.store.dispatch(KanbanActions.dropCard);
    // console.log('smart');
  }
}
