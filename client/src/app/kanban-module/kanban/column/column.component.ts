import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tkr-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input() title: string = '';

  ngOnInit(): void {
  }
}
