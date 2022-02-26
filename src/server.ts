import express from "express";
import config from "config";
import connectDb from "./utils/db";
import routes from "./routes";
const app = express();
const port = config.get<number>("port");

app.use(express.json());

app.listen(port, async () => {
  await connectDb();
  routes(app);
  console.log(`Server started at part ${port}`);
});
