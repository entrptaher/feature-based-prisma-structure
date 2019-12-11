const fragment = `
fragment Product on Product {
  id
  name
  transactions{
    id
    quantity
  }
}
`;

module.exports = fragment;
