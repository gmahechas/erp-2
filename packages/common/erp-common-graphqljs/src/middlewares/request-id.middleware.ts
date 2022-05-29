import { Request, Response, NextFunction } from 'express';
import { uuidv4 } from '@gmahechas/erp-common-ms-utils-js';

export const requestIdMiddleware = (request: Request, response: Response, next: NextFunction) => {
	const requestId = uuidv4();
	request.headers['x-request-id'] = requestId;
	next();
}