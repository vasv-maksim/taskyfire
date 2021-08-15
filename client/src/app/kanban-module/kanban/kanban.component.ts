import { Component } from '@angular/core';

@Component({
  selector: 'tkr-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent {
  public columns: string[] = [
    'Backlog',
    'SelectedForDev',
    'InProgress',
    'Review',
    'Done',
  ];
}
