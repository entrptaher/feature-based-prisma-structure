const productQuery = require('./product/query');
const productMutation = require('./product/mutation');
const transactionQuery = require('./transaction/query');
const transactionMutation = require('./transaction/mutation');

const resolvers = {
  Mutation: {
    ...productMutation,
    ...transactionMutation,
  },
  Query: {
    ...productQuery,
    ...transactionQuery,
  },
};

module.exports = resolvers;
