/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QGetColumn
// ====================================================

export interface QGetColumn_column {
  __typename: "Column";
  id: string;
  name: string;
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
