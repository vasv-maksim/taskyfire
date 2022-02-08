const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const { schema } = require('./server/schema');
const config = require('./server/config/config');

async function connectDB() {
  try {
    await mongoose.connect(config.mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log('Error:', e.message);
    // process.exit(1);
  }
}

async function createServer() {
  const app = express();
  const PORT = process.env.PORT || 5000;
  // eslint-disable-next-line no-console
  app.listen(PORT, () => { console.log(`Server run on port ${PORT}...`); });

  // add graphql
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));
}

async function runWhenProd() {
  if (process.env.DEV_MOD === 'prod') {
    // eslint-disable-next-line no-console
    console.log('Do something as prod');
  }
}

async function main() {
  connectDB();
  createServer();
  runWhenProd();
}

main();
