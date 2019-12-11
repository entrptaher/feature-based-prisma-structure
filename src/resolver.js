const { prisma } = require("./generated/prisma-client");
const transactionFragment = require("./fragment");
const productFragment = require("./fragment-products");

const resolvers = {
  Query: {
    product(root, { id }, { prisma }, info) {
      return prisma.product({ id }, info).$fragment(productFragment);;
    },
    products(root, args, { prisma }, info) {
      return prisma.products({}, info).$fragment(productFragment);
    },
    transaction(root, { id }, {}, info) {
      return prisma.transaction({ id }, info).$fragment(transactionFragment);
    },
    transactions(root, args, {}, info) {
      return prisma.transactions({}, info).$fragment(transactionFragment);
    }
  },
  Mutation: {
    createProduct(root, { name }, {}, info) {
      return prisma.createProduct({ name }, info).$fragment(productFragment);
    },
    deleteProduct(root, { id }, {}, info) {
      return prisma.deleteProduct({ id }, info).$fragment(productFragment);
    },
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
};

module.exports = resolvers;
