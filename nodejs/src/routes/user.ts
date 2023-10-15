import { Router } from "express";
import { listUsers, getUser, createUser } from "../controllers/user";

const userRoutes = Router();

userRoutes.get("/", listUsers);
userRoutes.get("/:id", getUser);
userRoutes.post("/", createUser);

export default userRoutes;
