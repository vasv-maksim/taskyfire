const { buildSchema } = require('graphql');

module.exports = {
  schema: buildSchema(`
  type Query {
    hello: String
  }
`),
};
