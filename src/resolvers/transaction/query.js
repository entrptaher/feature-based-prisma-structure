const { prisma } = require("../../generated/prisma-client");
const transactionFragment = require("./fragment");

module.exports = {
  transaction(root, { id }, {}, info) {
    return prisma.transaction({ id }, info).$fragment(transactionFragment);
  },
  transactions(root, args, {}, info) {
    return prisma.transactions({}, info).$fragment(transactionFragment);
  }
}