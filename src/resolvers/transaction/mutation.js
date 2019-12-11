const { prisma } = require("../../generated/prisma-client");
const transactionFragment = require("./fragment");
module.exports = {
  createTransaction(root, { quantity, productId }, {}, info) {
    return prisma
      .createTransaction(
        {
          quantity,
          product: { connect: { id: productId } }
        },
        info
      )
      .$fragment(transactionFragment);
  },
  updateTransaction(root, { quantity, id }, {}, info) {
    return prisma
      .updateTransaction(
        {
          where: { id: id },
          data: { quantity: quantity }
        },
        info
      )
      .$fragment(transactionFragment);
  },
  deleteTransaction(root, { id }, {}, info) {
    return prisma.mutation
      .deleteTransaction({ id }, info)
      .$fragment(transactionFragment);
  }
}