/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MDropCardIn
// ====================================================

export interface MDropCardIn_dropCardInColumn_cards {
  __typename: "Card";
  id: string;
  name: string;
  order: number;
  columnId: string;
}

export interface MDropCardIn_dropCardInColumn {
  __typename: "Column";
  cards: MDropCardIn_dropCardInColumn_cards[];
}

export interface MDropCardIn {
  /**
   * Change card order in column
   */
  dropCardInColumn: MDropCardIn_dropCardInColumn;
}

export interface MDropCardInVariables {
  columnId: string;
  fromOrder: number;
  toOrder: number;
}
