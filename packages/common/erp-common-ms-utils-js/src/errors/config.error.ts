import { CustomError } from './custom.error';
import { TypeErrorMessage } from './utils/error-type.enum';

export class ConfigError extends CustomError {
  statusCode = 500;
  grpcStatusCode = 2;

  constructor() {
    super();
    Object.setPrototypeOf(this, ConfigError.prototype);
  }

  serializeErrors() {
    return {
      type: TypeErrorMessage.CONFIG,
    };
  }
}
