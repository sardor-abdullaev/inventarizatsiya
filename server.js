require("dotenv").config();

const app = require("./app");
const { mongoConnect } = require("./utils/mongo");

const PORT = process.env.PORT || 8000;

async function startServer() {
  await mongoConnect();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
