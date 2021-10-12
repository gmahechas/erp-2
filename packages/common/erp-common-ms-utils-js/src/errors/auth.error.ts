import { CustomError } from './custom.error';
import { TypeErrorMessage } from './utils/error-type.enum';

export class AuthError extends CustomError {
	statusCode = 401;
	grpcStatusCode = 16;

	constructor() {
		super();
		Object.setPrototypeOf(this, AuthError.prototype);
	}

	serializeErrors() {
		return {
			type: TypeErrorMessage.AUTH,
		};
	}
}