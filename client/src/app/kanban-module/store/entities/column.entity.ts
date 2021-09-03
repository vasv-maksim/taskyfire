import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';

export const selectId = (card: QGetColumns_columns): Uuid => card.id;

export const sortComparer = (a: QGetColumns_columns, b: QGetColumns_columns): number => a.name.localeCompare(b.name);

export const columnAdapter: EntityAdapter<QGetColumns_columns> = createEntityAdapter<QGetColumns_columns>({
  selectId,
  sortComparer,
});

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = columnAdapter.getSelectors();

export const columnIds = selectIds;
export const columnEntities = selectEntities;
export const allColumn = selectAll;
export const columnTotal = selectTotal;

export interface ColumnState extends EntityState<QGetColumns_columns> {}

export const columnInitialState = columnAdapter.getInitialState();
