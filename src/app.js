const { GraphQLServer } = require("graphql-yoga");

const { prisma } = require("./generated/prisma-client");
const resolvers = require("./resolver");
const server = new GraphQLServer({
  typeDefs: __dirname + "/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    prisma
  })
});

const port = process.env.PORT || 4000;
server.start({ port }, () =>
  console.log("Server is running on http://localhost:" + port)
);
