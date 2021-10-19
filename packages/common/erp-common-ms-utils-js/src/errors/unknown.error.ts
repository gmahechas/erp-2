import { CustomError } from './custom.error';
import { TypeErrorMessage } from './utils/error-type.enum';

export class UnknownError extends CustomError {

	statusCode = 500;
	grpcStatusCode = 2;

	constructor() {
		super();
		Object.setPrototypeOf(this, UnknownError.prototype);
	}

	serializeErrors() {
		return {
			type: TypeErrorMessage.UNKNOWN,
		};
	}
}