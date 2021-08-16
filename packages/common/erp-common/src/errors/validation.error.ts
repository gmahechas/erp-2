import { ErrorObject } from 'ajv';
import { CustomError } from './custom.error';
import { TypeErrorMessage } from './utils/error-type.enum';

export class ValidationError extends CustomError {

	constructor(public errors: ErrorObject) {
		super();
		Object.setPrototypeOf(this, ValidationError.prototype);
	}

	serializeErrors() {
		return {
			message: TypeErrorMessage.VALIDATION_ERROR,
			errors: this.errors
		};
	}
}