import express from "express";
import routes from "./routes";
import database from "./database";

import "./config";

async function main() {
  const app = express();

  app.use(express.json());
  app.use(routes);

  await database.connect();

  app.listen(3333, () => console.log("Server listening on port 3333"));
}

main();
