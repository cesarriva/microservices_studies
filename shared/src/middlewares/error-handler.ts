import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/types/custom-error";
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).send(error.serializeErrors());
  }

  res.status(400).send({ errors: [{ message: "Something went wrong" }] });
};
