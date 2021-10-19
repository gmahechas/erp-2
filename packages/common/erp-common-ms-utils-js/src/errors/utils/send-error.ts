import { IError } from '@gmahechas/erp-common';
import { ValidationError } from '../validation.error';
import { NotFoundError } from '../not-found.error';
import { ConnectDbError } from '../connect-db.error';
import { ConfigError } from '../config.error';
import { AuthError } from '../auth.error';
import { UnknownError } from '../unknown.error';

export const sendError = (type: string, errors?: IError[]) => {
	switch (type) {
		case 'validation':
			throw new ValidationError(errors);
		case 'not_found':
				throw new NotFoundError();
		case 'db_connection':
				throw new ConnectDbError();
		case 'error_config':
				throw new ConfigError();
		case 'authentication_error':
			throw new AuthError();
		case 'unknown':
			throw new UnknownError();
		default:
			throw new Error('unknown error')
	}
}