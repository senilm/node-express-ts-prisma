import { Request, Response, NextFunction } from "express";
import logger from "../lib/logger.js";
import { ApiError } from "../utils/apiError.js";

export const errorHandler: (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => void = (err, req, res, _next) => {

  if (err instanceof ApiError) {
    logger.warn(`[${req.method}] ${req.url} — ${err.statusCode} — ${err.message}`);
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      data: null,
    });
  }

  const genericMsg = err instanceof Error ? err.message : "Unknown Error";
  logger.error(`[${req.method}] ${req.url} — 500 — ${genericMsg}`);

  return res.status(500).json({
    success: false,
    message: "Something went wrong",
    data: null,
    ...(process.env.NODE_ENV === "development" && {
      error: err instanceof Error ? err.stack : err,
    }),
  });
};
