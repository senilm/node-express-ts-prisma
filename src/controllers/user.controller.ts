import { NextFunction, Request, Response } from "express";
import prisma from "../lib/prisma.js";
import logger from "../lib/logger.js";
import { BadRequestError, UnauthorizedError } from "../utils/errors.js";

export const getUser = async (
  req: Request,
  _res: Response,
  _next: NextFunction
) => {
  const { id } = req.params;
  if (!id) throw BadRequestError("User ID is required");

  // await getUserById(id) -> Import from services

  // Simulate DB fetch
  const user = {
    id,
    name: "Senil Mendapara",
    email: "senil@example.com",
  };

  return user;
};
