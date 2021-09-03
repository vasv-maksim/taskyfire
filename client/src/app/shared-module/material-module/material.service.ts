import { Injectable } from '@angular/core';

type Filter = (data: {name: string}, value: string) => boolean;
@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  // this.dataSource.filteredData = this.utilsService.filterSubstring();
  public filterSubstring(): Filter {
    return (data: { name: string }, value: string) => data.name.trim().toLowerCase().indexOf(value) !== -1;
  }

  public filterFirstLetters(): Filter {
    return (data: { name: string }, value: string) => data.name.trim().toLowerCase().startsWith(value);
  }

  public emptySearch(value: string): string {
    return `Нет данных, подходящих под условие поиска «${value}»`;
  }
}
