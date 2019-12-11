const fragment = `
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
