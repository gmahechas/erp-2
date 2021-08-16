import { Request, Response, NextFunction } from 'express';
import { validate, ValidationError } from '@gmahechas/erp-common';

export const validatorMiddleware = (schema: object) => (request: Request, response: Response, next: NextFunction) => {
	const valid = validate(schema) as any;
	if (!valid(request.body)) {
		throw new ValidationError(valid.errors);
	}
	next();
};