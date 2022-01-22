import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FioService {
  public fullFio(last: string, first: string, second: string): string {
    return `${this.capitalizeWord(last)} ${this.capitalizeWord(first)} ${this.capitalizeWord(second)}`; // Иванов Иван Иванович
  }

  public shortFio(last: string, first: string, second: string): string {
    return `${this.capitalizeWord(last)} ${first[0].toUpperCase()}.${second[0].toUpperCase()}.`; // Иванов И.И.
  }

  public fullFamilyAndName(last: string, first: string): string {
    return `${this.capitalizeWord(last)} ${this.capitalizeWord(first)}`; // Иванов Иван
  }

  public shortFamilyAndName(last: string, first: string): string {
    return `${this.capitalizeWord(last)} ${first[0].toUpperCase()}.`; // Иванов И.
  }

  private capitalizeWord(word: string): string {
    return word[0].toUpperCase() + word.slice(1);
  }
}
