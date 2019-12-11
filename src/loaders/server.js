const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../generated/prisma-client');
const resolvers = require('../resolvers');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: (req) => ({ ...req, prisma }),
  });
}

module.exports = createServer;