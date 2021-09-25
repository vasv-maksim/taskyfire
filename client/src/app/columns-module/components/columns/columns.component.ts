import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import { AppState } from 'src/app/store/app.models';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';
import { takeUntil } from 'rxjs/operators';
import { DialogsService } from 'src/app/shared-module/dialogs-module/service/dialogs.service';
import { ColumnsActions } from '../../store/columns.action';
import { ColumnsSelectors } from '../../store/columns.selectors';
import { Ids } from '../../store/columns.models';

@Component({
  selector: 'tkr-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss'],
})
export class ColumnsComponent implements OnInit, OnDestroy {
  public columns: QGetColumns_columns[] = [];

  public readonly isLoading$: Observable<boolean> = this.store.select(ColumnsSelectors.isLoading);

  public readonly isError$: Observable<boolean> = this.store.select(ColumnsSelectors.isError);

  private readonly unsubscribe$: Subject<void> = new Subject();

  constructor(
    private store: Store<AppState>,
    private dialogsService: DialogsService,
  ) { }

  ngOnInit() {
    this.loadColumns();
    this.watchColumns();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public dropCard(event: CdkDragDrop<string[]>): void {
    // this.store.dispatch(ColumnsActions.dropCard);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public openCard(ids: Ids): void {
    this.dialogsService.openCard();
  }

  public renewColumns(): void {
    this.loadColumns();
  }

  private loadColumns(): void {
    this.store.dispatch(ColumnsActions.loadColumns());
  }

  private watchColumns(): void {
    this.store.select(ColumnsSelectors.columns)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((next) => {
      // Создаем глубокую копию колонок, вместе с копированием карточек, а не ссылок на них
      // Это необходимо, т.к. в дочернем компоненте Material Ui DnD мутирует входные данные.
      // По-хорошему нужно было бы пропустить это через store, но задержка по времени будет сказываться на плавности DnD
      // После отправки запроса на сервер с изменениями, store узнает о смене состояния и незаметно перерисует компонент
        const columns = next.map((column) => ({
          ...column,
          cards: column.cards.map((card) => card),
        }));
        this.columns = columns;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
