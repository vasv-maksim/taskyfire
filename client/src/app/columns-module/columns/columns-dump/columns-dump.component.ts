import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, Output,
} from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';

@Component({
  selector: 'tkr-columns-dump',
  templateUrl: './columns-dump.component.html',
  styleUrls: ['./columns-dump.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnsDumpComponent {
  @Input() columns: QGetColumns_columns[] = [];

  @Output() dropCard = new EventEmitter();

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
