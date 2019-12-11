const createServer = require("./loaders/server");
const server = createServer();
server.start(
  {
    port: process.env.API_PORT
  },
  listener => {
    console.log(
      `Server is now running on port http://localhost:${listener.port}`
    );
  }
);
