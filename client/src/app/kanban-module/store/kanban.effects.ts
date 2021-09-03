import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { KanbanActions } from './kanban.action';
import { KanbanRepository } from './services/kanban.repository';

@Injectable()
export class KanbanEffects {
  constructor(
    private actions$: Actions,
    private kanbanRepository: KanbanRepository,
  ) {}

  loadColumns$ = createEffect(() => this.actions$.pipe(
    ofType(KanbanActions.loadColumns),
    mergeMap(() => this.kanbanRepository.loadColumns()
      .pipe(
        map((next) => KanbanActions.loadColumnsSucc({ columns: next.data.columns })),
        catchError(() => EMPTY),
      )),
  ));

  loadColumn$ = createEffect(() => this.actions$.pipe(
    ofType(KanbanActions.loadColumnById),
    mergeMap((payload) => this.kanbanRepository.loadColumnById(payload.id)
      .pipe(
        map((next) => KanbanActions.loadColumnByIdSucc({ column: next.data.column })),
        catchError(() => EMPTY),
      )),
  ));

  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType(KanbanActions.loadCards),
    mergeMap(() => this.kanbanRepository.loadCards()
      .pipe(
        map((next) => KanbanActions.loadCardsSucc({ cards: next.data.cards })),
        catchError(() => EMPTY),
      )),
  ));

  loadCard$ = createEffect(() => this.actions$.pipe(
    ofType(KanbanActions.loadCardById),
    mergeMap((payload) => this.kanbanRepository.loadCardById(payload.id)
      .pipe(
        map((next) => KanbanActions.loadCardByIdSucc({ card: next.data.card })),
        catchError(() => EMPTY),
      )),
  ));
}
