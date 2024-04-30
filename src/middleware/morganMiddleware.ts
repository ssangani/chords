import morgan, { StreamOptions } from "morgan";
import { appConfig } from "./appConfig";
import logger from "./logger";

const stream: StreamOptions = {
  write: (message: string) => logger.http(message),
};

export const morganMiddleware = morgan(appConfig.morgan.format, { stream });
