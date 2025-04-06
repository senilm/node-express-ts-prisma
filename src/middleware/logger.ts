import { Request, Response, NextFunction } from "express";
import logger from "../lib/logger.js";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.http(`${req.method} ${req.url}`);

  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    logger.http(`${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
  });

  next();
};
