import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, Output,
} from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';

@Component({
  selector: 'tkr-columns-dumb',
  templateUrl: './columns-dumb.component.html',
  styleUrls: ['./columns-dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnsDumbComponent {
  @Input() columns: QGetColumns_columns[] = [];

  @Input() isLoading: boolean = false;

  @Input() isError: boolean = false;

  @Output() onDrop: EventEmitter<CdkDragDrop<string[]>> = new EventEmitter();

  @Output() onRenew: EventEmitter<void> = new EventEmitter();

  public dropCard(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    // this.onDrop.emit();
  }

  public getConnectedList(): string[] {
    return this.columns.map((x) => x.id);
  }

  public renew(): void {
    this.onRenew.emit();
  }
}
