import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FioService {
  public fullFio(first: string, second: string, last: string): string {
    return `${this.capitalize(last)} ${this.capitalize(first)} ${this.capitalize(second)}`; // Иванов Иван Иванович
  }

  public shortFio(first: string, second: string, last: string): string {
    return `${this.capitalize(last)} ${first[0].toUpperCase()}.${second[0].toUpperCase()}.`; // Иванов И.И.
  }

  public fullFamilyAndName(first: string, last: string): string {
    return `${this.capitalize(last)} ${this.capitalize(first)}`; // Иванов Иван
  }

  public shortFamilyAndName(first: string, last: string): string {
    return `${this.capitalize(last)} ${first[0].toUpperCase()}.`; // Иванов И.
  }

  private capitalize(word: string): string {
    return word[0].toUpperCase() + word.slice(1);
  }
}
