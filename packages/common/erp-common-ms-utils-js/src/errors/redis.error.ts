import { CustomError } from './custom.error';
import { TypeErrorMessage } from './utils/error-type.enum';

export class RedisError extends CustomError {
  statusCode = 500;
  grpcStatusCode = 2;

  constructor() {
    super();
    Object.setPrototypeOf(this, RedisError.prototype);
  }

  serializeErrors() {
    return {
      type: TypeErrorMessage.REDIS,
    };
  }
}
