import { ErrorObject } from 'ajv';
import { TypeErrorMessage } from './utils/error-type.enum';

export abstract class CustomError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract serializeErrors(): { message: TypeErrorMessage; errors: ErrorObject; };
}