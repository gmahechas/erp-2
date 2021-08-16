import { Request, Response, NextFunction } from 'express';
import { validate } from '@gmahechas/erp-common';

export const validatorMiddleware = (schema: object) => (request: Request, response: Response, next: NextFunction) => {
	const valid = validate(schema);
	if (!valid(request.body)) {
		console.log(valid.errors);
		throw Error('error la cago')
	}
	next();
};