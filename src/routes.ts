import { Express, Request, Response } from "express";
import UserRoute from "./routes/user.route";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send("Health ok");
  });
  app.use("/api", UserRoute);
}

export default routes;
