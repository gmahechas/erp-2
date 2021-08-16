import { Request, Response, NextFunction } from 'express';
import { validate, ValidationError, parseErrors } from '@gmahechas/erp-common';

export const validatorMiddleware = (schema: object) => (request: Request, response: Response, next: NextFunction) => {
	const valid = validate(schema);
	if (!valid(request.body)) {
		const errors = parseErrors(valid.errors);
		throw new ValidationError(errors);
	}
	next();
};