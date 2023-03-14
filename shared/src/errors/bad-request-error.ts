import { ICommonErrorStructure } from "./types/common-error-structure";
import { CustomError } from "./types/custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);
  }

  serializeErrors = (): ICommonErrorStructure => {
    return { errors: [{ message: this.message }] };
  };
}
