import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarsService {
  constructor(private snackBar: MatSnackBar) { }

  public error(message: string, action: string = ''): void {
    this.snackBar.open(message, action, {
      duration: 5000,
      panelClass: ['error-snackbar'],
    });
  }

  public success(message: string, action: string = ''): void {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['success-snackbar'],
    });
  }

  public info(message: string, action = '', duration: number = 2000, panelClass: string = 'info-snackbar'): void {
    this.snackBar.open(message, action, {
      duration,
      panelClass: [panelClass],
    });
  }
}
