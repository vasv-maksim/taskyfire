import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardDialogComponent } from '../components/card-dialog/card-dialog.component';

import { InfoDialogComponent } from '../components/info-dialog/info-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogsService {
  constructor(private dialog: MatDialog) { }

  public openCard(): MatDialogRef<InfoDialogComponent, never> {
    return this.dialog.open(CardDialogComponent, {
      data: { },
    });
  }

  public info(title: string = 'Информация', massage='', icon='info'): MatDialogRef<InfoDialogComponent, never> {
    return this.dialog.open(InfoDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        title,
        massage,
        icon,
      },
    });
  }

  public confirm(title: string, massage: string): MatDialogRef<InfoDialogComponent, boolean> {
    return this.dialog.open(InfoDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        title,
        massage,
      },
    });
  }

  public input(title: string, massage: string): MatDialogRef<InfoDialogComponent, string | undefined> {
    return this.dialog.open(InfoDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        title,
        massage,
      },
    });
  }

  public mapInfo(title: string, massage: string, spatial: any): MatDialogRef<InfoDialogComponent, never> {
    return this.dialog.open(InfoDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        title,
        massage,
        spatial,
      },
    });
  }
}
