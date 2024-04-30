const tryParseInt = (key: string, defaultVal: number): number => {
  const rawVal = process.env[key] || "";
  const val = parseInt(rawVal);
  return isNaN(val) ? defaultVal : val;
};

const DEFAULT_PRIMARY_VENDOR_RATE_LIMIT = 10;
const DEFAULT_SECONDARY_VENDOR_RATE_LIMIT = 10;

export const appConfig = {
  environment: process.env.NODE_ENV || "development",
  morgan: {
    format: process.env.LOG_FORMAT || "dev",
  },
  api: {
    primary: {
      rateLimit: tryParseInt(
        "PRIMARY_VENDOR_RATE_LIMIT",
        DEFAULT_PRIMARY_VENDOR_RATE_LIMIT,
      ),
    },
    seconday: {
      rateLimit: tryParseInt(
        "SECONDARY_VENDOR_RATE_LIMIT",
        DEFAULT_SECONDARY_VENDOR_RATE_LIMIT,
      ),
    },
  },
};
