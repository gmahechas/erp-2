import { CustomError } from './custom.error';
import { TypeErrorMessage } from './utils/error-type.enum';

export class VaultError extends CustomError {
  statusCode = 500;
  grpcStatusCode = 2;

  constructor() {
    super();
    Object.setPrototypeOf(this, VaultError.prototype);
  }

  serializeErrors() {
    return {
      type: TypeErrorMessage.VAULT,
    };
  }
}
