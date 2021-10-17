import { gql } from 'apollo-angular';

export const gqlGetCards = gql`
  query QGetCards {
    cards {
      id
      name
      columnId
      order
    }
  }`;

export const gqlGetCardById = gql`
  query QGetCard($id: String!) {
    card(id: $id) {
      id
      name
      columnId
      order
    }
  }`;

export const gqlGetColumns = gql`
  query QGetColumns {
    columns {
      id
      name
      cards {
        id
        name
        order
      }
    }
  }`;

export const gqlGetColumnById = gql`
  query QGetColumn($id: String!) {
    column(id: $id) {
      id
      name
      cards {
        id
        name
        order
      }
    }
  }`;

export const gqlDropCard = gql`
  mutation MDropCard($drop: Drop!) {
    dropCard(drop: $drop)
  }
`;
