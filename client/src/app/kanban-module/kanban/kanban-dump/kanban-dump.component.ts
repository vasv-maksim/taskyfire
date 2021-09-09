import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, Output,
} from '@angular/core';

import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Group } from '../../store/kanban.models';

@Component({
  selector: 'tkr-kanban-dump',
  templateUrl: './kanban-dump.component.html',
  styleUrls: ['./kanban-dump.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KanbanDumpComponent {
  @Input() groups: Group[] = [];

  @Output() dropCard = new EventEmitter();

  ngOnInit() { }

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
    return this.groups.map((x) => x.id);
  }
}
