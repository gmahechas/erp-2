import { CustomError } from './custom.error';
import { TypeErrorMessage } from './utils/error-type.enum';

export class AuthenticationError extends CustomError {
	statusCode = 401;
	grpcStatusCode = 16;

	constructor() {
		super();
		Object.setPrototypeOf(this, AuthenticationError.prototype);
	}

	serializeErrors() {
		return {
			type: TypeErrorMessage.AUTHENTICATION,
		};
	}
}