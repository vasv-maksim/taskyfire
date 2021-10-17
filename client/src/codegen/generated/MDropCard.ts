/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Drop } from "./../../../generated/globalTypes";

// ====================================================
// GraphQL mutation operation: MDropCard
// ====================================================

export interface MDropCard {
  /**
   * Change card order and column
   */
  dropCard: boolean;
}

export interface MDropCardVariables {
  drop: Drop;
}
