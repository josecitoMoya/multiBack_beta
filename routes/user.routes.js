import { Router } from "express";
import { createUser } from "../controllers/user.controllers.js";

export const user = Router();

user.get("/create-user", (req, res) => {
  res.send(createUser);
});
