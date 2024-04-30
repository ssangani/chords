import morgan, { StreamOptions } from "morgan";
import { appConfig } from "./appConfig";
import Logger from "./logger";

const stream: StreamOptions = {
  write: (message: string) => Logger.http(message),
};

export const morganMiddleware = morgan(appConfig.morgan.format, { stream });
