const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => ({ req }), // pass request headers
}).then(({ url }) => {
  console.log(`🚀 Payment API ready at ${url}`);
});
