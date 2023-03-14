import { ICommonErrorStructure } from "./types/common-error-structure";
import { CustomError } from "./types/custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error connecting to database";
  constructor() {
    super('Error connecting to the Db');
  }

  serializeErrors = (): ICommonErrorStructure => {
    return { errors: [{ message: this.reason }] };
  };
}
