import { ICommonErrorStructure } from "./types/common-error-structure";
import { CustomError } from "./types/custom-error";

export class UnauthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not authorized');
  }

  serializeErrors = (): ICommonErrorStructure => {
    return { errors: [{ message: "Not authorized" }] };
  };
}
