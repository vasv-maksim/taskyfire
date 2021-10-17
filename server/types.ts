const {
  GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLInt, GraphQLInputObjectType,
} = require('graphql');

const Card = new GraphQLObjectType({
  name: 'Card',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    order: { type: GraphQLNonNull(GraphQLInt) },
    columnId: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const Column = new GraphQLObjectType({
  name: 'Column',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    cards: { type: GraphQLNonNull(GraphQLList(GraphQLNonNull(Card))) },
  }),
});

const Drop = new GraphQLInputObjectType({
  name: 'Drop',
  fields: () => ({
    cardId: { type: GraphQLNonNull(GraphQLString) },
    fromColumnId: { type: GraphQLNonNull(GraphQLString) },
    toColumnId: { type: GraphQLNonNull(GraphQLString) },
    fromOrder: { type: GraphQLNonNull(GraphQLInt) },
    toOrder: { type: GraphQLNonNull(GraphQLInt) },
  }),
});

module.exports = {
  Card,
  Column,
  Drop,
};
