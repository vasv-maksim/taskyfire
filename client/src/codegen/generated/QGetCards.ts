/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QGetCards
// ====================================================

export interface QGetCards_cards {
  __typename: "Card";
  id: string;
  name: string;
  columnId: string;
}

export interface QGetCards {
  /**
   * List of all cards
   */
  cards: QGetCards_cards[];
}
