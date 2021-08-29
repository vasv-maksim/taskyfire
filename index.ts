const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const { schema } = require('./server/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

if (process.env.DEV_MOD === 'prod') {
  // eslint-disable-next-line no-console
  console.log('Do something as prod');
}

const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-console
app.listen(PORT, () => { console.log(`Server run on port ${PORT}...`); });
