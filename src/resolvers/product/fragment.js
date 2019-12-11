const gql = require("graphql-tag");

const fragment = gql`
  fragment Product on Product {
    id
    name
    transactions {
      id
      quantity
    }
  }
`;

module.exports = fragment;
