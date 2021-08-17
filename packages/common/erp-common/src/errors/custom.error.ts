import { IError } from './utils';
import { TypeErrorMessage } from './utils/error-type.enum';

export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor() {
    super();
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract serializeErrors(): { type: TypeErrorMessage; errors?: IError[]; };
}