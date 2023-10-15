import { Router } from "express";
import userRoutes from "./user";

const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Hello from nodejs");
});

routes.use("/user", userRoutes);

export default routes;
