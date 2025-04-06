import { Request, Response, NextFunction } from "express";

type AsyncController = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const controllerHandler = (controller: AsyncController) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await controller(req, res, next);

      if (res.headersSent) return;

      res.status(200).json({
        success: true,
        message: "Success",
        data: result ?? null,
      });
    } catch (err) {
      next(err);
    }
  };
};
