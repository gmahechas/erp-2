import { CustomError } from './custom.error';
import { IError } from './utils';
import { TypeErrorMessage } from './utils/error-type.enum';

export class ValidationError extends CustomError {

	statusCode = 400;
	grpcStatusCode = 3;

	constructor(public errors: IError[]) {
		super();
		Object.setPrototypeOf(this, ValidationError.prototype);
	}

	serializeErrors() {
		return {
			type: TypeErrorMessage.VALIDATION,
			errors: this.errors
		};
	}
}