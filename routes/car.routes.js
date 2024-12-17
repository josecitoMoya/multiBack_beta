import { Router } from "express";

export const car = Router();

car.use("/", (req, res) => {
  res.send("Estas en cars de ROUTES");
});
