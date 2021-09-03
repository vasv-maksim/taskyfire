/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QGetCard
// ====================================================

export interface QGetCard_card {
  __typename: "Card";
  id: string;
  name: string;
  columnId: string;
}

export interface QGetCard {
  /**
   * Single card by its Uuid
   */
  card: QGetCard_card;
}

export interface QGetCardVariables {
  id: string;
}
