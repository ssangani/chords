import { NextFunction, Request, Response } from "express";
import Logger from "./logger";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  Logger.error(err);
  res.status(500).send("Ruh Roh!");
};
