import { IError } from '@gmahechas/erp-common';

import { TypeErrorMessage } from './error-type.enum';
import { ValidationError } from '../validation.error';
import { NotFoundError } from '../not-found.error';
import { ConnectDbError } from '../connect-db.error';
import { ConfigError } from '../config.error';
import { AuthError } from '../auth.error';
import { AuthorizationError } from '../authorization.error';
import { UnknownError } from '../unknown.error';

export const sendError = (type: TypeErrorMessage, errors?: IError[]) => {
	switch (type) {
		case TypeErrorMessage.VALIDATION:
			throw new ValidationError(errors);
		case TypeErrorMessage.NOT_FOUND:
				throw new NotFoundError();
		case TypeErrorMessage.DB_CONNECTION:
				throw new ConnectDbError();
		case TypeErrorMessage.CONFIG:
				throw new ConfigError();
		case TypeErrorMessage.AUTH:
			throw new AuthError();
		case TypeErrorMessage.AUTHORIZATION:
			throw new AuthorizationError();
		case TypeErrorMessage.UNKNOWN:
			throw new UnknownError();
		default:
			throw new Error('unknown error')
	}
}