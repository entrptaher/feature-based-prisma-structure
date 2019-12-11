const { prisma } = require("../../generated/prisma-client");
const productFragment = require("./fragment");

module.exports = {
  product(root, { id }, { }, info) {
    return prisma.product({ id }, info).$fragment(productFragment);;
  },
  products(root, args, { }, info) {
    return prisma.products({}, info).$fragment(productFragment);
  },
}