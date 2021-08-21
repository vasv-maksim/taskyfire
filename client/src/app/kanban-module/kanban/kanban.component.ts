import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'tkr-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent {
  public columns = [
    {
      id: '1',
      title: 'Backlog',
      tasks: [{
        name: 'Item 1',
      },
      {
        name: 'Item 2',
      },
      {
        name: 'Item 3',
      },
      {
        name: 'Item 4',
      }],
    },
    {
      id: '2',
      title: 'SelectedForDev',
      tasks: [],
    },
    {
      id: '3',
      title: 'InProgress',
      tasks: [],
    },
    {
      id: '4',
      title: 'Review',
      tasks: [],
    },
    {
      id: '5',
      title: 'Done',
      tasks: [],
    },
  ];

  public dropTask(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public getConnectedList(): any[] {
    return this.columns.map((x) => x.id);
  }
}
