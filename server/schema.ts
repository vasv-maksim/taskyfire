export {};
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
    getTasks: {
      type: new GraphQLList(Card),
      description: 'List of all cards',
      resolve: () => cards,
    },
    getTaskById: {
      type: Card,
      description: 'Single card by its Uuid',
      args: { id: { type: GraphQLNonNull(GraphQLString) } },
      resolve: (parent: any, args: any) => cardById(args.id),
    },
    getColumns: {
      type: new GraphQLList(Column),
      description: 'List of all columns',
      resolve: () => columns,
    },
    getColumnById: {
      type: Column,
      description: 'Single column by its Uuid',
      args: { id: { type: GraphQLNonNull(GraphQLString) } },
      resolve: (parent: any, args: any) => columnById(args.id),
    },
  },
});

module.exports = {
  schema: new GraphQLSchema({ query: rootQuery }),
};
