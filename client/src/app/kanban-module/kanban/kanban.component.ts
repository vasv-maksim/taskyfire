import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';

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
  public columns: QGetColumns_columns[] = [];

  public cards: QGetCards_cards[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(KanbanActions.loadColumns());
    this.store.dispatch(KanbanActions.loadCards());
    this.watchColumn();
    this.watchCards();
  }

  private watchColumn(): void {
    this.store.select(KanbanSelectors.columns)
      .subscribe((next) => {
        this.columns = next;
      });
  }

  private watchCards(): void {
    this.store.select(KanbanSelectors.cards)
      .subscribe((next) => {
        this.cards = next;
      });
  }

  public getColumnCards(columnId: Uuid): QGetCards_cards[] {
    return this.cards.filter((x) => x.columnId === columnId);
  }

  public dropCard(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public getConnectedList(): string[] {
    return this.columns.map((x) => x.id);
  }
}
