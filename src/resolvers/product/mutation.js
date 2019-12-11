const { prisma } = require("../../generated/prisma-client");
const productFragment = require("./fragment");

module.exports = {
  createProduct(root, { name }, {}, info) {
    return prisma.createProduct({ name }, info).$fragment(productFragment);
  },
  deleteProduct(root, { id }, {}, info) {
    return prisma.deleteProduct({ id }, info).$fragment(productFragment);
  },
}