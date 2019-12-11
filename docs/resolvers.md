# Product

## Mutations
```graphql
mutation createProduct{
  createProduct(name: "Baz") {
    id
    name
  }
}

mutation deleteProduct{
  deleteProduct(id: "ck41h8siw6i1n0922zbj6boyc") {
    id
    name
  }
}
```

## Query
```graphql
query products{
  products{
    id
    name
    transactions{
      id
    }
  }
}

query product{
  product(id: "ck41cxw4c1hrf0964yviqyeme"){
    id
    name
    transactions{
      id
      quantity
    }
  }
}
```

# Transaction

## Mutations
```graphql
mutation createTransaction{
  createTransaction(quantity: 100, productId: "ck41fxz1i64n80922yf9a4fai") {
    id
    quantity
    product{
      id
      name
    }
  }
}
```

## Query
```graphql
query transaction{
  transaction(id: "ck41f6faw28qa0964zqhfvbzi"){
    id
    quantity
    product{
      id
      name
    }
  }
}
query transactions{
  transactions{
    id
    quantity
    product{
      id
    }
  }
}
```