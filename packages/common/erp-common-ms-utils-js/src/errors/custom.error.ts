import { IError } from '@gmahechas/erp-common-js';
import { TypeErrorMessage } from './utils/error-type.enum';

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract grpcStatusCode: number;
  constructor() {
    super();
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  abstract serializeErrors(): { type: TypeErrorMessage; errors?: IError[]; };
}