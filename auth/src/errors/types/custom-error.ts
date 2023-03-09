import { ICommonErrorStructure } from "./common-error-structure";

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract serializeErrors: () => ICommonErrorStructure;

  constructor(errMessage: string) {
    super(errMessage);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
