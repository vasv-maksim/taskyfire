/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QGetColumns
// ====================================================

export interface QGetColumns_columns {
  __typename: "Column";
  id: string;
  name: string;
}

export interface QGetColumns {
  /**
   * List of all columns
   */
  columns: QGetColumns_columns[];
}