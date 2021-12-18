import { CustomError } from './custom.error';
import { TypeErrorMessage } from './utils/error-type.enum';

export class AuthorizationError extends CustomError {

	statusCode = 401;
	grpcStatusCode = 7;

	constructor() {
		super();
		Object.setPrototypeOf(this, AuthorizationError.prototype);
	}

	serializeErrors() {
		return {
			type: TypeErrorMessage.AUTHORIZATION
		};
	}
}