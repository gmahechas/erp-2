import { CustomError } from './custom.error';
import { TypeErrorMessage } from './utils/error-type.enum';

export class MongoError extends CustomError {
  statusCode = 500;
  grpcStatusCode = 2;

  constructor() {
    super();
    Object.setPrototypeOf(this, MongoError.prototype);
  }

  serializeErrors() {
    return {
      type: TypeErrorMessage.MONGO,
    };
  }
}
