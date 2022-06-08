import { IError } from '@gmahechas/erp-common-js';

import { TypeErrorMessage } from './error-type.enum';
import { ValidationError } from '../validation.error';
import { NotFoundError } from '../not-found.error';
import { ConfigError } from '../config.error';
import { AuthenticationError } from '../authentication.error';
import { AuthorizationError } from '../authorization.error';
import { UnknownError } from '../unknown.error';
import { MongoError } from '../mongo.error';
import { VaultError } from '../vault.error';
import { RedisError } from '../redis.error';

export const sendError = (type: TypeErrorMessage, errors?: IError[]) => {
	switch (type) {
		case TypeErrorMessage.VALIDATION:
			throw new ValidationError(errors);
		case TypeErrorMessage.NOT_FOUND:
			throw new NotFoundError();
		case TypeErrorMessage.CONFIG:
			throw new ConfigError();
		case TypeErrorMessage.AUTHENTICATION:
			throw new AuthenticationError();
		case TypeErrorMessage.AUTHORIZATION:
			throw new AuthorizationError();
		case TypeErrorMessage.UNKNOWN:
			throw new UnknownError();
		case TypeErrorMessage.MONGO:
			throw new MongoError();
		case TypeErrorMessage.VAULT:
			throw new VaultError();
		case TypeErrorMessage.REDIS:
			throw new RedisError();
		default:
			throw new Error('unknown error')
	}
}