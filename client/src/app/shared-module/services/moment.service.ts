import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  public day(time: Date | string): string {
    const momentDate = moment(time);
    return momentDate.format('DD.MM.YYYY');
  }

  public dayWithTime(time: Date | string): string {
    const momentDate = moment(time);
    return momentDate.format('DD.MM.YYYY HH:mm');
  }
}
