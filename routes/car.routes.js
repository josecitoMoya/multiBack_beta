import { Router } from "express";
import { createCar } from "../controllers/car.controllers.js";

export const car = Router();

car.get("/create-car", (req, res) => {
  res.send(createCar);
});
