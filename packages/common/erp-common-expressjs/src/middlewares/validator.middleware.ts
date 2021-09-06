import { Request, Response, NextFunction } from 'express';
import { validate, parseErrors} from '@gmahechas/erp-common';
import { ValidationError } from '@gmahechas/erp-common-ms-utils-js';

// TODO: ERP-4
export const validatorMiddleware = (schema: object) => (request: Request, response: Response, next: NextFunction) => {
	const valid = validate(schema);
	if (!valid(request.body)) {
		const errors = parseErrors(valid.errors);
		throw new ValidationError(errors);
	}
	next();
};