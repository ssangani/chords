export const appConfig = {
  environment: process.env.NODE_ENV || "development",
  morgan: {
    format: process.env.LOG_FORMAT || "dev",
  },
};
