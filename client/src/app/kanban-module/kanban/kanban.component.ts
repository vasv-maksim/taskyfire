import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tkr-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent implements OnInit {
  ngOnInit(): void {
  }

  public closePanel($event: Event): void {
    $event.stopPropagation();
  }
}
