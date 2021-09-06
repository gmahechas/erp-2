import { CustomError } from './custom.error';
import { TypeErrorMessage } from './utils/error-type.enum';

export class ConnectDbError extends CustomError {

	statusCode = 500;
	grpcStatusCode = 2;

	constructor() {
		super();
		Object.setPrototypeOf(this, ConnectDbError.prototype);
	}

	serializeErrors() {
		return {
			type: TypeErrorMessage.DB_CONNECTION,
		};
	}

}