import { ValidationError } from "express-validator";
import { ICommonErrorStructure } from "./types/common-error-structure";
import { CustomError } from "./types/custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');
  }

  serializeErrors = (): ICommonErrorStructure => ({
    errors: this.errors.map((err) => ({
      message: err.msg,
      field: err.param,
    })),
  });
}
