const {
  GraphQLObjectType, GraphQLString, GraphQLNonNull,
} = require('graphql');

const Card = new GraphQLObjectType({
  name: 'Card',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    columnId: { type: GraphQLNonNull(GraphQLString) },
  }),
});

const Column = new GraphQLObjectType({
  name: 'Column',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = {
  Card,
  Column,
};
