import { ValidationError } from "express-validator";
import { ICommonErrorStructure } from "./types/common-error-structure";
import { CustomError } from "./types/custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super("Route not found");
  }

  serializeErrors = (): ICommonErrorStructure => ({
    errors: [{ message: "Not found" }],
  });
}
