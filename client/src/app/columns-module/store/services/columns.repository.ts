import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, ApolloBase } from 'apollo-angular';

import { gqlGetCards, gqlGetColumnById, gqlGetColumns } from 'src/codegen/columns.gql';
import { QGetCards } from 'src/codegen/generated/QGetCards';
import { QGetColumns } from 'src/codegen/generated/QGetColumns';
import { QGetColumn, QGetColumnVariables } from 'src/codegen/generated/QGetColumn';
import { QGetCard, QGetCardVariables } from 'src/codegen/generated/QGetCard';
import { gqlGetCardById } from '../../../../codegen/columns.gql';

@Injectable({
  providedIn: 'root',
})
export class ColumnsRepository {
  private apollo: ApolloBase;

  constructor(private apolloClient: Apollo) {
    this.apollo = this.apolloClient.default();
  }

  public loadCards(): Observable<ApolloQueryResult<QGetCards>> {
    return this.apollo.query<QGetCards>({ query: gqlGetCards });
  }

  public loadCardById(id: Uuid): Observable<ApolloQueryResult<QGetCard>> {
    return this.apollo.query<QGetCard, QGetCardVariables>({
      query: gqlGetCardById,
      variables: {
        id,
      },
    });
  }

  public loadColumns(): Observable<ApolloQueryResult<QGetColumns>> {
    return this.apollo.query<QGetColumns>({ query: gqlGetColumns });
  }

  public loadColumnById(id: Uuid): Observable<ApolloQueryResult<QGetColumn>> {
    return this.apollo.query<QGetColumn, QGetColumnVariables>({
      query: gqlGetColumnById,
      variables: {
        id,
      },
    });
  }
}
