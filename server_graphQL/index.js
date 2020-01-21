var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const PORT = 4000;

// https://graphql.org/graphql-js/running-an-express-graphql-server/

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello World!';
  }
}

var graphqlApp = express();
graphqlApp.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphql: true
}))

graphqlApp.listen(PORT, () => console.log('graphql listening on ', PORT));