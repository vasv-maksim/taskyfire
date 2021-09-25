import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FioService {
  public fullFio(first: string, second: string, last: string): string {
    return `${this.capitalizeWord(last)} ${this.capitalizeWord(first)} ${this.capitalizeWord(second)}`; // Иванов Иван Иванович
  }

  public shortFio(first: string, second: string, last: string): string {
    return `${this.capitalizeWord(last)} ${first[0].toUpperCase()}.${second[0].toUpperCase()}.`; // Иванов И.И.
  }

  public fullFamilyAndName(first: string, last: string): string {
    return `${this.capitalizeWord(last)} ${this.capitalizeWord(first)}`; // Иванов Иван
  }

  public shortFamilyAndName(first: string, last: string): string {
    return `${this.capitalizeWord(last)} ${first[0].toUpperCase()}.`; // Иванов И.
  }

  private capitalizeWord(word: string): string {
    return word[0].toUpperCase() + word.slice(1);
  }
}
