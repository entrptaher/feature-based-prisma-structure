module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateProduct {
  count: Int!
}

type AggregateTransaction {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createTransaction(data: TransactionCreateInput!): Transaction!
  updateTransaction(data: TransactionUpdateInput!, where: TransactionWhereUniqueInput!): Transaction
  updateManyTransactions(data: TransactionUpdateManyMutationInput!, where: TransactionWhereInput): BatchPayload!
  upsertTransaction(where: TransactionWhereUniqueInput!, create: TransactionCreateInput!, update: TransactionUpdateInput!): Transaction!
  deleteTransaction(where: TransactionWhereUniqueInput!): Transaction
  deleteManyTransactions(where: TransactionWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String!
  createdAt: DateTime!
  transactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction!]
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  name: String!
  transactions: TransactionCreateManyWithoutProductInput
}

input ProductCreateOneWithoutTransactionsInput {
  create: ProductCreateWithoutTransactionsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutTransactionsInput {
  id: ID
  name: String!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  name: String
  transactions: TransactionUpdateManyWithoutProductInput
}

input ProductUpdateManyMutationInput {
  name: String
}

input ProductUpdateOneRequiredWithoutTransactionsInput {
  create: ProductCreateWithoutTransactionsInput
  update: ProductUpdateWithoutTransactionsDataInput
  upsert: ProductUpsertWithoutTransactionsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateWithoutTransactionsDataInput {
  name: String
}

input ProductUpsertWithoutTransactionsInput {
  update: ProductUpdateWithoutTransactionsDataInput!
  create: ProductCreateWithoutTransactionsInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  transactions_every: TransactionWhereInput
  transactions_some: TransactionWhereInput
  transactions_none: TransactionWhereInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  transaction(where: TransactionWhereUniqueInput!): Transaction
  transactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction]!
  transactionsConnection(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TransactionConnection!
  node(id: ID!): Node
}

type Subscription {
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  transaction(where: TransactionSubscriptionWhereInput): TransactionSubscriptionPayload
}

type Transaction {
  id: ID!
  quantity: Int!
  product: Product!
  createdAt: DateTime!
}

type TransactionConnection {
  pageInfo: PageInfo!
  edges: [TransactionEdge]!
  aggregate: AggregateTransaction!
}

input TransactionCreateInput {
  id: ID
  quantity: Int!
  product: ProductCreateOneWithoutTransactionsInput!
}

input TransactionCreateManyWithoutProductInput {
  create: [TransactionCreateWithoutProductInput!]
  connect: [TransactionWhereUniqueInput!]
}

input TransactionCreateWithoutProductInput {
  id: ID
  quantity: Int!
}

type TransactionEdge {
  node: Transaction!
  cursor: String!
}

enum TransactionOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  createdAt_ASC
  createdAt_DESC
}

type TransactionPreviousValues {
  id: ID!
  quantity: Int!
  createdAt: DateTime!
}

input TransactionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [TransactionScalarWhereInput!]
  OR: [TransactionScalarWhereInput!]
  NOT: [TransactionScalarWhereInput!]
}

type TransactionSubscriptionPayload {
  mutation: MutationType!
  node: Transaction
  updatedFields: [String!]
  previousValues: TransactionPreviousValues
}

input TransactionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TransactionWhereInput
  AND: [TransactionSubscriptionWhereInput!]
  OR: [TransactionSubscriptionWhereInput!]
  NOT: [TransactionSubscriptionWhereInput!]
}

input TransactionUpdateInput {
  quantity: Int
  product: ProductUpdateOneRequiredWithoutTransactionsInput
}

input TransactionUpdateManyDataInput {
  quantity: Int
}

input TransactionUpdateManyMutationInput {
  quantity: Int
}

input TransactionUpdateManyWithoutProductInput {
  create: [TransactionCreateWithoutProductInput!]
  delete: [TransactionWhereUniqueInput!]
  connect: [TransactionWhereUniqueInput!]
  set: [TransactionWhereUniqueInput!]
  disconnect: [TransactionWhereUniqueInput!]
  update: [TransactionUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [TransactionUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [TransactionScalarWhereInput!]
  updateMany: [TransactionUpdateManyWithWhereNestedInput!]
}

input TransactionUpdateManyWithWhereNestedInput {
  where: TransactionScalarWhereInput!
  data: TransactionUpdateManyDataInput!
}

input TransactionUpdateWithoutProductDataInput {
  quantity: Int
}

input TransactionUpdateWithWhereUniqueWithoutProductInput {
  where: TransactionWhereUniqueInput!
  data: TransactionUpdateWithoutProductDataInput!
}

input TransactionUpsertWithWhereUniqueWithoutProductInput {
  where: TransactionWhereUniqueInput!
  update: TransactionUpdateWithoutProductDataInput!
  create: TransactionCreateWithoutProductInput!
}

input TransactionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  product: ProductWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [TransactionWhereInput!]
  OR: [TransactionWhereInput!]
  NOT: [TransactionWhereInput!]
}

input TransactionWhereUniqueInput {
  id: ID
}
`
      }
    