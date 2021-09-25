export { };
const {
  GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLString, GraphQLNonNull,
} = require('graphql');

const {
  cards, columns, cardById, columnById,
} = require('./resolver');
const { Card, Column } = require('./types');

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

module.exports = {
  schema: new GraphQLSchema({ query: rootQuery }),
};
