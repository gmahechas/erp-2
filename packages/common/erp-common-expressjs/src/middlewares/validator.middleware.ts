import { Request, Response, NextFunction } from 'express';
import { validate, parseErrors} from '@gmahechas/erp-common';
import { sendError, TypeErrorMessage } from '@gmahechas/erp-common-ms-utils-js';

export const validatorMiddleware = (schema: object) => (request: Request, response: Response, next: NextFunction) => {
	const valid = validate(schema);
	if (!valid(request.body)) {
		const errors = parseErrors(valid.errors);
		sendError(TypeErrorMessage.VALIDATION, errors)
	}
	next();
};