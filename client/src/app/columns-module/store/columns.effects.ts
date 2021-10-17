import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ColumnsActions } from './columns.action';
import { ColumnsRepository } from './services/columns.repository';
import { SnackbarsService } from '../../shared-module/material-module/services/snackbars.service';

@Injectable()
export class ColumnsEffects {
  constructor(
    private actions$: Actions,
    private columnsRepository: ColumnsRepository,
    private snackbarsService: SnackbarsService,
  ) { }

  loadColumns$ = createEffect(() => this.actions$.pipe(
    ofType(ColumnsActions.loadColumns),
    mergeMap(() => this.columnsRepository.loadColumns()
      .pipe(
        map((next) => ColumnsActions.loadColumnsSucc({ columns: next.data.columns })),
        catchError(() => {
          this.snackbarsService.error('Ошибка загрузки', 'Колонки');
          return of(ColumnsActions.loadColumnsErr());
        }),
      )),
  ));

  loadColumn$ = createEffect(() => this.actions$.pipe(
    ofType(ColumnsActions.loadColumnById),
    mergeMap((payload) => this.columnsRepository.loadColumnById(payload.id)
      .pipe(
        map((next) => ColumnsActions.loadColumnByIdSucc({ column: next.data.column })),
        catchError(() => {
          this.snackbarsService.error('Ошибка загрузки', 'Колонка');
          return EMPTY;
        }),
      )),
  ));

  dropCard$ = createEffect(() => this.actions$.pipe(
    ofType(ColumnsActions.dropCard),
    mergeMap((payload) => this.columnsRepository.dropCard(payload.drop)
      .pipe(
        map(() => ColumnsActions.dropCardSucc()),
        catchError(() => {
          this.snackbarsService.error('Не удалось переместить задачу', 'Колонка');
          return of(ColumnsActions.dropCardErr());
        }),
      )),
  ));
}
