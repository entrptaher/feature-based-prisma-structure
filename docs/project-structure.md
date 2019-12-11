## Folder structure for Prisma models
```
prisma
├── prisma.yml
├── admin
│   ├── model.prisma
│   └── seed.js
├── order
│   ├── model.prisma
│   └── seed.js
└── user
    ├── model.prisma
    └── seed.js
```

## Folder structure for resolvers
```
src
├── resolvers
│   ├── admin
│   │   ├── action.js
│   │   ├── fragment.js
│   │   ├── mutation.js
│   │   ├── query.js
│   │   ├── queue.js
│   │   ├── subscription.js
│   │   └── utils.js
```

Every feature in the project has it's own folder in the resolvers. Here are the possible usage for the specific files.

### Common files most feature may have
- fragment: Prisma client needs the specific fragments to restrict the data it gets from the database.
- mutation: Actions like creating, deleting, updating etc.
- query: Finding the products/feature details.

### Additional files some features may have
- queue: If we use a job queue, the publisher should go there.
- action: If we use a job queue, the subscriber should go there.
- subscription: Some features might have to be realtime. The pubsub and other related stuff.
- utils: Anything not related to the prisma, like a time conversion function.

## Common files between features

The very common features like login, encryption, decrption, mailer, pubsub etc. should go to the common folder.