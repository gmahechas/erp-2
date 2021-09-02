import { CustomError } from './custom.error';
import { IError } from './utils';
import { TypeErrorMessage } from './utils/error-type.enum';

export class NotFoundError extends CustomError {

	statusCode = 404;
	grpcStatusCode = 5;

	constructor() {
		super();
		Object.setPrototypeOf(this, NotFoundError.prototype);
	}

	serializeErrors() {
		return {
			type: TypeErrorMessage.NOT_FOUND,
		};
	}
}