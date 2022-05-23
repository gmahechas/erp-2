import { Request, Response, NextFunction } from 'express';
import { validate, parseErrors} from '@gmahechas/erp-common';
import { Context, sendError, TypeErrorMessage, Winston } from '@gmahechas/erp-common-ms-utils-js';

export const validatorMiddleware = (schema: object) => (request: Request, response: Response, next: NextFunction) => {
	const auth = Context.get('auth');
	const { body, originalUrl, method, params, query } = request;
	const valid = validate(schema);
	const data = body ? body : {};
	if (!valid(data)) {
		const errors = parseErrors(valid.errors);
		Winston.logger.error(TypeErrorMessage.VALIDATION, { auth: JSON.stringify(auth), action: originalUrl, method, payload: JSON.stringify({ body, params, query }), errors: JSON.stringify(errors) });
		sendError(TypeErrorMessage.VALIDATION, errors)
	}
	next();
};