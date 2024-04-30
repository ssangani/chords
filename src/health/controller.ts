import { Router, Request, Response, NextFunction } from "express";
import { constants } from "http2";

const liveRoute = "/live";
const live = async (
  _request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    return response.status(constants.HTTP_STATUS_OK).send();
  } catch (e) {
    next(e);
  }
};

const readyRoute = "ready";
const ready = async (
  _request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    return response.status(constants.HTTP_STATUS_OK).send();
  } catch (e) {
    next(e);
  }
};

export const HealthRoot = "/health";
export const HealthRouter = Router()
  .get(liveRoute, live)
  .get(readyRoute, ready);
