import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, Output,
} from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { QGetCards_cards } from 'src/codegen/generated/QGetCards';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';

@Component({
  selector: 'tkr-kanban-dump',
  templateUrl: './kanban-dump.component.html',
  styleUrls: ['./kanban-dump.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanDumpComponent {
  @Input() cards: QGetCards_cards[] = [];

  @Input() columns: QGetColumns_columns[] = [];

  @Output() dropCard = new EventEmitter();

  ngOnInit() { }

  public getColumnCards(columnId: Uuid): QGetCards_cards[] {
    return this.cards.filter((x) => x.columnId === columnId);
  }

  public dropCardDump(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.dropCard.emit();
  }

  public getConnectedList(): string[] {
    return this.columns.map((x) => x.id);
  }
}
