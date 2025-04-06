import winston from "winston";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
} as const;

type LogLevel = keyof typeof levels;

const icons: Record<LogLevel, string> = {
  error: "❌",
  warn: "⚠️",
  info: "💡",
  http: "🌐",
  debug: "🐛",
};

const emojiFormatter = winston.format(
  (info) => {
    (info as any).rawLevel = info.level; 
    return info;
  }
);

const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  emojiFormatter(),
  winston.format.colorize({ level: true }),
  winston.format.printf((info) => {
    const rawLevel = (info as any).rawLevel as LogLevel;
    const icon = icons[rawLevel] || "";
    return `${info.timestamp} ${info.level} ${icon} => ${info.message}`;
  })
);

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || (process.env.NODE_ENV === "development" ? "debug" : "warn"),
  levels,
  format,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/all.log" }),
  ],
});

export default logger;
