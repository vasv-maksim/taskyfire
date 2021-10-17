export { };
const {
  GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLBoolean,
} = require('graphql');

const {
  cards, columns, cardById, columnById, dropCard,
} = require('./resolver');
const { Card, Column, Drop } = require('./types');

const rootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    cards: {
      type: new GraphQLNonNull(GraphQLList(new GraphQLNonNull(Card))),
      description: 'List of all cards',
      resolve: () => cards(),
    },
    card: {
      type: new GraphQLNonNull(Card),
      description: 'Single card by its Uuid',
      args: { id: { type: GraphQLNonNull(GraphQLString) } },
      resolve: (parent: any, args: any) => cardById(args.id),
    },
    columns: {
      type: new GraphQLNonNull(GraphQLList(new GraphQLNonNull(Column))),
      description: 'List of all columns',
      resolve: () => columns(),
    },
    column: {
      type: new GraphQLNonNull(Column),
      description: 'Single column by its Uuid',
      args: { id: { type: GraphQLNonNull(GraphQLString) } },
      resolve: (parent: any, args: any) => columnById(args.id),
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    dropCard: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'Change card order and column',
      args: {
        drop: { type: GraphQLNonNull(Drop) },
      },
      resolve: (parent: any, args: any) => dropCard(args.drop),
    },
  },
});

module.exports = {
  schema: new GraphQLSchema({ query: rootQuery, mutation: Mutation }),
};
