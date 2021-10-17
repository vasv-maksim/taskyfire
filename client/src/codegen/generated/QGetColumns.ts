/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QGetColumns
// ====================================================

export interface QGetColumns_columns_cards {
  __typename: "Card";
  id: string;
  name: string;
  order: number;
}

export interface QGetColumns_columns {
  __typename: "Column";
  id: string;
  name: string;
  cards: QGetColumns_columns_cards[];
}

export interface QGetColumns {
  /**
   * List of all columns
   */
  columns: QGetColumns_columns[];
}
