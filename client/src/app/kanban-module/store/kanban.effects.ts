import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { KanbanActions } from './kanban.action';
import { KanbanRepository } from './services/kanban.repository';

@Injectable()
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private kanbanRepository: KanbanRepository,
  ) {}

  loadColumns$ = createEffect(() => this.actions$.pipe(
    ofType(KanbanActions.loadColumns),
    mergeMap(() => this.kanbanRepository.loadColumns()
      .pipe(
        map((next) => KanbanActions.loadColumnsSucc({ columns: next.columns })),
        catchError(() => EMPTY),
      )),
  ));

  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType(KanbanActions.loadCards),
    mergeMap(() => this.kanbanRepository.loadCards()
      .pipe(
        map((next) => KanbanActions.loadCardsSucc({ cards: next.cards })),
        catchError(() => EMPTY),
      )),
  ));
}
