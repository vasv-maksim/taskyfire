import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  public dayMonthYear(time: Date | string): string {
    const momentDate = moment(time);
    return momentDate.format('DD.MM.YYYY'); // '17.12.2021'
  }

  public dayWithTime(time: Date | string): string {
    const momentDate = moment(time);
    return momentDate.format('DD.MM.YYYY HH:mm'); // '17.12.2021 18:30
  }
}
