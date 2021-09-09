import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.models';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';
import { QGetCards_cards } from 'src/codegen/generated/QGetCards';
import { KanbanActions } from '../store/kanban.action';
import { KanbanSelectors } from '../store/kanban.selectors';
import { Group } from '../store/kanban.models';

@Component({
  selector: 'tkr-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent implements OnInit {
  public columns: QGetColumns_columns[] = [];

  public cards: QGetCards_cards[] = [];

  public groups: Group[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.watchColumns();
    this.watchCards();
    this.loadColumns();
    this.loadCards();
  }

  private loadColumns(): void {
    this.store.dispatch(KanbanActions.loadColumns());
  }

  private loadCards(): void {
    this.store.dispatch(KanbanActions.loadCards());
  }

  private watchColumns(): void {
    this.store.select(KanbanSelectors.columns)
      .subscribe((next) => {
        this.columns = next;
        if (this.columns.length !== 0) {
          this.buildGroups();
        }
      });
  }

  private watchCards(): void {
    this.store.select(KanbanSelectors.cards)
      .subscribe((next) => {
        this.cards = next;
        if (this.columns.length !== 0 && this.cards.length !== 0) {
          this.buildGroups();
        }
      });
  }

  private buildGroups(): void {
    this.groups = this.columns.map((x) => ({ ...x, cards: this.getColumnCards(x.id) }));
  }

  private getColumnCards(columnId: Uuid): QGetCards_cards[] {
    return this.cards.filter((x) => x.columnId === columnId);
  }

  public dropCard(): void {
    // this.store.dispatch(KanbanActions.dropCard);
    // console.log('smart');
  }
}
