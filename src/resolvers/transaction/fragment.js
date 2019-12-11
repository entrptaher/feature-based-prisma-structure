const gql = require("graphql-tag");

const fragment = gql`
  fragment Transactions on Transactions {
    id
    quantity
    product {
      id
      name
    }
  }
`;

module.exports = fragment;
