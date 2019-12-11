# Instructions

- [Project Structure](project-structure.md)
- [Resolvers](resolvers.md)

## Step 1: Create database endpoint
Follow the instruction to install prisma and [create a new demo prisma database](https://www.prisma.io/docs/-a001/). You will also find how to setup your own database using docker if you are interested.

You need the demo database url from that tutorial. You can skip this part if you already have another prisma endpoint.

## Step 2: Update .env file
Create a .env file with the prisma api endpoint you got from step 1,
```
PRISMA_API=https://eu1.prisma.sh/abcdefg/hello-world/dev
API_PORT=4000
```

## Step 3: Install additional cli tools
```
npm i -g dotenv-cli prisma yarn
```

## Step 4: Deployment
Install all dependencies,
```
yarn install
```

Deploy the schema to endpoint,
```
dotenv -e .env prisma deploy
```

Start the app,
```
dotenv -e .env yarn start
```

## Step 5: Enjoy
Open browser and go to the playground at http://localhost:4000