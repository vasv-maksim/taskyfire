import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { QGetColumns_columns } from 'src/codegen/generated/QGetColumns';

export const selectId = (column: QGetColumns_columns): Uuid => column.id;

export const sortComparer = (a: QGetColumns_columns, b: QGetColumns_columns): number => a.name.localeCompare(b.name);

export const adapter: EntityAdapter<QGetColumns_columns> = createEntityAdapter<QGetColumns_columns>({
  selectId,
  sortComparer,
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export interface ColumnsState extends EntityState<QGetColumns_columns> {}

export const initialState = adapter.getInitialState();
