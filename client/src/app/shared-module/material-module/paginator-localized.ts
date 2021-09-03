import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class PaginatorLocalized extends MatPaginatorIntl {
  constructor() {
    super();
    this.nextPageLabel = 'Следующие';
    this.previousPageLabel = 'Предыдущие';
    this.itemsPerPageLabel = 'Количество строк';
  }

  // eslint-disable-next-line func-names
  public getRangeLabel = function (page: number, pageSize: number, length: number): string {
    if (length === 0 || pageSize === 0) {
      return `0 od ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} из ${length}`;
  };
}
