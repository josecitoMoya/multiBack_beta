import { Router } from "express";

export const user = Router();

user.use("/", (req, res) => {
  res.send("Estas en user de ROUTES");
});
