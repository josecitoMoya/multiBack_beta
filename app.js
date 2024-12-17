import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./routes/index.js";

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

//app.use(cors())

app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});

app.use("/api", router);
