/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QGetColumn
// ====================================================

export interface QGetColumn_column_cards {
  __typename: "Card";
  id: string;
  name: string;
  order: number;
}

export interface QGetColumn_column {
  __typename: "Column";
  id: string;
  name: string;
  cards: QGetColumn_column_cards[];
}

export interface QGetColumn {
  /**
   * Single column by its Uuid
   */
  column: QGetColumn_column;
}

export interface QGetColumnVariables {
  id: string;
}
