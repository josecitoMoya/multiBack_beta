import { Router } from "express";
import { car } from "./car.routes.js";
import { user } from "./user.routes.js";

export const router = Router();

router.use("/car", car);
router.use("/user", user);
