import { gql } from 'apollo-angular';

export const gqlGetCards = gql`
    query QGetCards {
      cards {
        id
        name
        columnId
      }
    }`;

export const gqlGetCardById = gql`
    query QGetCard($id: String!) {
      card(id: $id) {
        id
        name
        columnId
      }
    }`;

export const gqlGetColumns = gql`
    query QGetColumns {
      columns {
        id
        name
      }
    }`;

export const gqlGetColumnById = gql`
    query QGetColumn($id: String!) {
      column(id: $id) {
        id
        name
      }
    }`;
