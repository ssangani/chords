import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import { HealthRoot, HealthRouter } from "./health/controller";
import { morganMiddleware } from "./middleware/morganMiddleware";
import { errorHandler } from "./middleware/errorHandler";
import Logger from "./middleware/logger";
import { exit } from "process";

const app = express()
  .use(helmet())
  .use(bodyParser.json())
  .use(cors())
  .use(morganMiddleware)
  .use(HealthRoot, HealthRouter)
  .use(errorHandler);

app.listen(3030, () => {
  console.log("Server started");
});

process.on("uncaughtException", (err) => {
  Logger.error("Uncaught exception", err);
  exit(1);
});
