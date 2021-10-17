/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MDropCardBetween
// ====================================================

export interface MDropCardBetween_dropCardBetweenColumns_cards {
  __typename: "Card";
  id: string;
  name: string;
  order: number;
  columnId: string;
}

export interface MDropCardBetween_dropCardBetweenColumns {
  __typename: "Column";
  cards: MDropCardBetween_dropCardBetweenColumns_cards[];
}

export interface MDropCardBetween {
  /**
   * Change card order and column
   */
  dropCardBetweenColumns: MDropCardBetween_dropCardBetweenColumns;
}

export interface MDropCardBetweenVariables {
  fromColumnId: string;
  toColumnId: string;
  fromOrder: number;
  toOrder: number;
}
